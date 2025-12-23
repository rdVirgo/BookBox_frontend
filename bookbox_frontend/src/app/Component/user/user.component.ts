import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, MatSortHeader } from "@angular/material/sort";
import { UserService } from "../../service/User-service/user.service";
import { Router } from "@angular/router";
import {User} from "../../Interface/user";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  listUsers: User[] = [];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  display: string[] = ["name", "surname", "username", "email", "actions"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (users: User[]) => {
        this.listUsers = users;
        this.dataSource.data = this.listUsers;
      },
      error: (err) => {
        console.error("Error while loading users:", err);
      }
    });
  }

  handleAddUser(): void {
    alert("You will add a new user");
    this.router.navigateByUrl("/add-user");
  }

  handleDeleteUser(user: User): void {
      alert("you will delete this user !");
      this.userService.deleteUser(user.userId).subscribe({
        next : () => {
          this.listUsers=this.listUsers.filter(u=> u.userId !== user.userId);
          this.dataSource.data=this.listUsers;
        }
      })
    }
  filterUser(event : Event){}

  handleUpdateUser(element :Event) {

  }
}
