import { OnInit, Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-box-form',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './box-form.component.html',
  styleUrl: './box-form.component.css'
})
export class BoxFormComponent implements OnInit {



  responses = new FormGroup({
    boxName: new FormControl(""),
    boxDescription:new FormControl(""),
    boxQuantity:new FormControl(""),
    boxLatitude:new FormControl(""),
    boxLongitude:new FormControl(""),
  })

  constructor(){}

  ngOnInit():void{

  }

  getAllInputValues(){
    return this.responses.value;
  }

}
