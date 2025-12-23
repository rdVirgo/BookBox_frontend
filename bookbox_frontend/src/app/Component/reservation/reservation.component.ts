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
import { ReservationService } from '../../service/reservation-service/reservation.service';
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
    private reservationService: ReservationService
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

  handleAddReservation(){}

  handleUpdateReservation(element:any){}

  handleDeleteReservation(element:any){}

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
