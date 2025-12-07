import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InitialPageComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookbox_frontend';

}
