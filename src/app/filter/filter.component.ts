import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../users.service';

export interface F {
  [key: string]: number
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {

  @Input('users') users: User[] = [];
  filteredUsers:  User[] = [];
  @Output() filteredUsersEmitter: EventEmitter<User[]> = new EventEmitter<User[]>();
  
  genders: F = {};
  departaments: F = {};
  cities: F = {};

  g: {[key: string]: boolean} = {}
  d: {[key: string]: boolean} = {}
  c: {[key: string]: boolean} = {}

  gArr: string[] = []
  dArr: string[] = []
  cArr: string[] = []

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    
    this.getAllGenders();
  }



  ngOnInit(): void {

  }



  getAllGenders() {
    this.users.forEach(i => {
      this.genders[i.gender] ? this.genders[i.gender]++ : this.genders[i.gender] = 1;
      this.departaments[i.department] ? this.departaments[i.department]++ : this.departaments[i.department] = 1;
      this.cities[i.address.city] ? this.cities[i.address.city]++ : this.cities[i.address.city] = 1;
    });
    Object.keys(this.genders).forEach(i => this.g[i] = true)
    Object.keys(this.departaments).forEach(i => this.d[i] = true)
    Object.keys(this.cities).forEach(i => this.c[i] = true)
    this.onChange();
  }

  getKeys(obj: Object) {
    return Object.keys(obj);
  }

  onChange() {

    for (let key in this.g) {
      if (!this.g[key]) {
        delete this.g[key]
      }
    }
    this.gArr = Object.keys(this.g);

    for (let key in this.d) {
      if (!this.d[key]) {
        delete this.d[key]
      }
    }
    this.dArr = Object.keys(this.d);

    for (let key in this.c) {
      if (!this.c[key]) {
        delete this.c[key]
      }
    }
    this.cArr = Object.keys(this.c);

    this.filteredUsers = this.users.filter(i => this.gArr.includes(i.gender) && this.dArr.includes(i.department) && this.cArr.includes(i.address.city))
    this.filteredUsersEmitter.emit(this.filteredUsers)
    this.updateNumbers();
  }

  updateNumbers() {
    this.genders = {}
    this.departaments = {}
    this.cities = {}

    this.filteredUsers.forEach(i => {
      this.genders[i.gender] ? this.genders[i.gender]++ : this.genders[i.gender] = 1;
      this.departaments[i.department] ? this.departaments[i.department]++ : this.departaments[i.department] = 1;
      this.cities[i.address.city] ? this.cities[i.address.city]++ : this.cities[i.address.city] = 1;
    });
  }



}
