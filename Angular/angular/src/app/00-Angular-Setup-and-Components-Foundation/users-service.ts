import { App } from './../app';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  

  getUsers() {
    return [
      { id: 1, name: 'Alice', avatar: 'images/user1.png' },
      { id: 2, name: 'Bob', avatar: 'images/user2.jpg' },
      { id: 3, name: 'Charlie', avatar: 'images/user3.jpg' },
      { id: 4, name: 'David', avatar: 'images/user4.jpg' },
      { id: 5, name: 'Eve', avatar: 'images/user5.jpg' },
    ];
  }
}
