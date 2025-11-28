import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConnexionFormComponent} from "./Compenent/connexion-form/connexion-form.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConnexionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookbox_frontend';
}
