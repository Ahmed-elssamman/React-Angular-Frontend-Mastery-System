import { Component, inject } from '@angular/core';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  Users=inject(UsersService).getUsers(); 
}
