import { AfterViewInit, ViewChild, OnInit, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BoxFormComponent } from '../../GlobalForms/box-form/box-form.component';
import { Box, CreatedBox } from '../../Interface/box';
import { UpdateBoxService } from '../../update-box-service/update-box.service';
import {Coordinates} from "../../Interface/coordinates";

@Component({
  selector: 'app-update-box',
  standalone: true,
  imports: [
    BoxFormComponent,
    MatButtonModule
  ],
  templateUrl: './update-box.component.html',
  styleUrl: './update-box.component.css'
})
export class UpdateBoxComponent implements OnInit, AfterViewInit {

  constructor(private updateBoxService:UpdateBoxService){}

  @ViewChild(BoxFormComponent)
  boxFormComponent!:BoxFormComponent;

  boxToUpdate!:Box;

  updateBox(){

  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.boxToUpdate = this.updateBoxService.getBoxToUpdate();

    let box:Box = {
      boxId: this.boxToUpdate.boxId,
      name : "",
      quantity : 0,
      description : "",
      coordinates : {
        latitude:0,
        longitude: 0
      }
    }

    if (this.boxToUpdate){
      if (this.boxToUpdate.coordinates){
        if (this.boxToUpdate.coordinates.latitude){
          box.coordinates.latitude = this.boxToUpdate.coordinates.latitude;
        }
        if (this.boxToUpdate.coordinates.longitude){
          box.coordinates.longitude = this.boxToUpdate.coordinates.longitude;
        }
      }
      if (this.boxToUpdate.name){
        box.name = this.boxToUpdate.name;
      }
      if (this.boxToUpdate.description){
        box.description = this.boxToUpdate.description;
      }
      if (this.boxToUpdate.quantity){
        box.quantity = this.boxToUpdate.quantity;
      }

      setTimeout(()=>{
        this.boxFormComponent?.getAllInputValues().patchValue({
          boxName: box.name,
          boxDescription: box.description,
          boxQuantity: box.quantity,
          boxLatitude: box.coordinates.latitude,
          boxLongitude: box.coordinates.longitude
        });
      });


    }



  }

}
