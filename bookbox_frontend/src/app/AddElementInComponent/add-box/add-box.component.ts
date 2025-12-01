import { AfterViewInit, ViewChild, OnInit, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BoxFormComponent } from '../../GlobalForms/box-form/box-form.component';
import { BoxService } from '../../box-service/box.service';
import { Box, CreatedBox } from '../../Interface/box';

@Component({
  selector: 'app-add-box',
  standalone: true,
  imports: [
    MatButtonModule,
    BoxFormComponent
  ],
  templateUrl: './add-box.component.html',
  styleUrl: './add-box.component.css'
})
export class AddBoxComponent implements OnInit, AfterViewInit{

  constructor(
    private boxService: BoxService
  ){}

  @ViewChild(BoxFormComponent)
  boxFormComponent!:BoxFormComponent;

  createBox(){
    const nameBox = this.boxFormComponent.getAllInputValues().get("boxName")?.value;
    const descriptionBox = this.boxFormComponent.getAllInputValues().get("boxDescription")?.value;
    const quantityBox = this.boxFormComponent.getAllInputValues().get("boxQuantity")?.value;
    const latitudeBox = this.boxFormComponent.getAllInputValues().get("boxLatitude")?.value;
    const longitudeBox = this.boxFormComponent.getAllInputValues().get("boxLongitude")?.value;


    const box: CreatedBox = {
      name:nameBox,
      quantity:quantityBox,
      description:descriptionBox,
      coordinates:{
        latitude:latitudeBox,
        longitude:longitudeBox
      }
    };

    this.boxService.createBox(box).subscribe({
      next: (boxes) =>{
        alert("A new box was created !");
      },
      error: (err) =>{
        alert("Error while creating a box. Make sure you are provided all the required information.");
      }
    });

    this.boxFormComponent.resetForm();

  }

  ngOnInit():void{

  }

  ngAfterViewInit():void{
    console.log("Form : " + this.boxFormComponent.getAllInputValues());
  }





}
