import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';


import { HttpClient } from '@angular/common/http';


import { ResponseUsers, ResponseDelUser } from '../models/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private apiUrl = 'http://localhost:8888/api';


  constructor(private http: HttpClient) { }


  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.apiUrl);
  }


  getUser(id: string): Observable<ResponseUsers> {


    const url = `${this.apiUrl}?id=${id}`;

    return this.http.get<ResponseUsers>(url);
  }


  deleteUser(id: string): Observable<ResponseDelUser> {

 
    const url = `${this.apiUrl}?id=${id}`;

    return this.http.delete<ResponseDelUser>(url);
  }
}
