import { OnInit,Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import {AuthenticationService} from "../../service/AuthenticationService/authentication.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  username?: string | null;

  constructor(private router : Router, private authService: AuthenticationService) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  goToLoginPage():void{
    this.router.navigateByUrl("/authentication");
  }

}
