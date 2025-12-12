import { AfterViewInit, ViewChild, OnInit, ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule ,NgForOf, NgIf } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReservationService } from '../../reservation-service/reservation.service';
import { Reservation } from '../../Interface/reservation';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    NgForOf,
    NgIf,
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    MatSortModule,
    MatSort,
    MatInput,
    MatInputModule,
    MatFormFieldModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements AfterViewInit, OnInit{

  listReservation!: Reservation[];

  dataSource:any;
  display:string[] = ["place","user", "quantity","actions"];

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ){}

  getAllReservation(){
    this.reservationService.getAllReservation().subscribe({
      next : rest => {
        this.listReservation = rest;

        this.dataSource.data = this.listReservation;
      },
      error : err => {
        console.log(err);
      }
    });
  }

  filterReservation(event:Event){

  }

  handleAddReservation(){
    const conf = confirm("Do you want to add a new reservation ?");

    if(conf){
      this.router.navigateByUrl("/add-reservation");
    }
  }

  handleUpdateReservation(element:any){
    const conf = confirm("Do you want to update this reservation ?");

    if(conf){
      alert("Updated !");
    }
  }

  handleDeleteReservation(element:any){
    const conf = confirm("Do you want to delete this reservation ?");

    if(conf){
      alert("Deleted !");
    }
  }

  ngOnInit(){
    this.dataSource = new MatTableDataSource<Reservation>([]);
    this.listReservation = [];
    this.getAllReservation();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
