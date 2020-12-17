// @ts-ignore
import { Injectable } from '@angular/core';
import {Car} from '../../models/car';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../authentication.service';
import {User} from '../../models/user';
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class UserService {
   url1 = 'https://localhost:44360/api/token';
  constructor(private http: HttpClient, private authenService: AuthenticationService) { }

  delete(id: number): any {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenService.getToken());
    this.http.delete<User>(this.url1 + '/' + id).subscribe(
      data => {
        console.log(data);
        return data;
      },
      error => console.log('oops', error)
    );
    return null;
  }

  editUser(user: User): any {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenService.getToken());
    this.http.put<User>(this.url1 + '/' + user.id, user).subscribe(
      data => {
        console.log(data);
        return data;
      },
      error => console.log('oops', error)
    );
    return null;
  }

  getALL(): Observable<User[]>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenService.getToken());


    return this.http.get<User[]>(this.url1, httpOptions);
  }
}
