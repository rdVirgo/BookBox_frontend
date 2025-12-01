import { AfterViewInit, ViewChild, OnInit, Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { BoxFormComponent } from '../../GlobalForms/box-form/box-form.component';

@Component({
  selector: 'app-add-box',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BoxFormComponent
  ],
  templateUrl: './add-box.component.html',
  styleUrl: './add-box.component.css'
})
export class AddBoxComponent implements OnInit, AfterViewInit{

  constructor(){}

  @ViewChild(BoxFormComponent)
  boxFormComponent!:BoxFormComponent;

  createBox(){
    alert("Show : " + this.boxFormComponent.getAllInputValues().boxName);
  }

  ngOnInit():void{

  }

  ngAfterViewInit():void{
    console.log("Form : " + this.boxFormComponent.getAllInputValues());
  }





}
