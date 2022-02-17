import { User, UsersService } from './../users.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Output() eventEmitter: EventEmitter<User[]> = new EventEmitter<User[]>();

  users: User[] = [];
  @Input('filtredUsers') filtredUsers: User[] = [];

  searchTerm: string = "";
  direction: boolean = true;
  column: string = "name";
  type: string = "string";

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
    
  }

  getUsers() {
    this.usersService.fetchUsers().subscribe(response => {
      this.users = response;
      this.filtredUsers = this.users.concat([]);
      console.log(this.users)
      this.eventEmitter.emit(this.users)
    })
  }

  setSortParams(param: any){
    this.direction = param.dir;
    this.column = param.col;
    this.type = param.typ;
  }

}
