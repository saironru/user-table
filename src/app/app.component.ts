import { Component } from '@angular/core';
import { User } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = []
  filteredUsers: User[] = []



  updateUsers(users: User[]) {
    this.users = users;
    console.log('appcomponent users', this.users)
  }

  updateFilteredUsers(filteredUsers: User[]) {
    this.filteredUsers = filteredUsers;
    console.log('appcomponent filteredUsers', this.filteredUsers)
  }


    
}
