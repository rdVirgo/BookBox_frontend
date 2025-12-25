import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly USERNAME_KEY = 'USERNAME';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {}

  login(user: { username: string; password: string }): Observable<any> {
    return this.http.post<any>('/api/auth/login', user).pipe(
      tap(response => this.doLoginUser(response))
    );
  }

  private doLoginUser(response: any) {
    // Backend renvoie: token, username, role
    localStorage.setItem(this.JWT_TOKEN, response.token);
    localStorage.setItem(this.USERNAME_KEY, response.username);

    this.isAuthenticatedSubject.next(true);

    // here we do the redirection after log in
    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.USERNAME_KEY);

    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }
  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }
  private hasToken(): boolean {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }
  isAuthenticatedObservable(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
