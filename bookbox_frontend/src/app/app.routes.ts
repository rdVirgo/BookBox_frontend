import { Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { BoxComponent } from './Component/box/box.component';
import { ReservationComponent } from './Component/reservation/reservation.component';
import { UserComponent } from './Component/user/user.component';
import { CoordinatesComponent } from './Component/coordinates/coordinates.component';
import { HomeComponent } from './Component/home/home.component';
import { AddBoxComponent } from './AddElementInComponent/add-box/add-box.component';
import { AddReservationComponent } from './AddElementInComponent/add-reservation/add-reservation.component';
import { AddUserComponent } from './AddElementInComponent/add-user/add-user.component';
import { ConnexionFormComponent} from './Component/connexion-form/connexion-form.component';
import { BoxFormComponent} from './GlobalForms/box-form/box-form.component';
import { UpdateBoxComponent} from './UpdateElementComponent/update-box/update-box.component';
import {InscriptionFormComponent} from "./Component/inscription-form/inscription-form.component";
import {MapComponent} from "./Component/map/map.component";


export const routes: Routes = [

  { path:'home', component: HomeComponent },
  { path:'load-user', component: UserComponent },
  { path:'add-user', component: AddUserComponent },
  { path:'load-box', component: BoxComponent },
  { path:'add-box', component: AddBoxComponent },
  { path:'load-reservation', component: ReservationComponent },
  { path:'add-reservation', component: AddReservationComponent },
  { path:'map', component: CoordinatesComponent },
  { path:'authentication', component:ConnexionFormComponent},
  { path:'box-form', component:BoxFormComponent},
  { path:'update-box', component:UpdateBoxComponent},
  { path:'SignIn', component:InscriptionFormComponent},
  { path:'Map',component:MapComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'**', redirectTo:'home',pathMatch: 'full'}

];
