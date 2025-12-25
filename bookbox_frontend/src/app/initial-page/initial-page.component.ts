import { Component, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from "../service/AuthenticationService/authentication.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.css'
})
export class InitialPageComponent implements OnInit {
  isAuthenticated = false;
  username: string | null = null;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {

    this.authService.isAuthenticatedObservable().subscribe((val: boolean) => {
      this.isAuthenticated = val;
      this.username = this.authService.getUsername();
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/authentication');
  }
}
