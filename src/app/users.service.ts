import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

export interface User {
    id: string,
    name: string,
    age: number,
    gender: string,
    department: string,
    address: {
      city: string,
      street: string
    }
}

@Injectable({
    providedIn: "root"
})
export class UsersService {
    constructor(private http: HttpClient) {}

    fetchUsers(): Observable<User[]> {
        return this.http.get<User[]>('../assets/users.json')
    }
}