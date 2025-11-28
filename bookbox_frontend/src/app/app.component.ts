import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InitialPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookbox_frontend';
}
