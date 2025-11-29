import { AfterViewInit, ViewChild, OnInit, ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule ,NgForOf, NgIf } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BoxService } from '../../box-service/box.service';
import { Box } from '../../Interface/box';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-box',
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
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent implements OnInit, AfterViewInit{

  listBoxes!: Box[];

  boxes:any;
  dataSource:any;
  display:string[] = ["name","description", "quantity","coordinates","actions"];




  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(
    private router:Router,
    private boxService: BoxService
  ){}

  getAllBoxes(){
      this.boxService.getAllBoxes().subscribe({
        next : rest => {
          this.listBoxes = rest;

          this.dataSource.data = this.listBoxes;
        },
        error : err => {
          console.log(err);
        }
      });

  }

  ngOnInit():void{

    this.dataSource = new MatTableDataSource<Box>([]);

    this.listBoxes = [];


    this.getAllBoxes();

  }

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }




}
