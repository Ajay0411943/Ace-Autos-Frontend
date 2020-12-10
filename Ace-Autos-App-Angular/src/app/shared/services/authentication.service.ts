import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {

  }



  login(username: string, password: string): Observable<any> {
    console.log('lets go');
    this.http.post<any>(environment.apiURL + 'token', {username, password}).subscribe(
      data => {
        const token = data.token;
        console.log(token);
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username, token}));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      },
      error => console.log('oops', error)
    );
    return;
    /* .pipe(map(response => {
       const token = response.token;
       console.log(token);
       // login successful if there's a jwt token in the response
       if (token) {
         // store username and jwt token in local storage to keep user logged in between page refreshes
         localStorage.setItem('currentUser', JSON.stringify({ username, token}));
         // return true to indicate successful login
         return true;
       } else {
         // return false to indicate failed login
         return false;
       }
     }));*/
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser && currentUser.token;
    } else {
      return null;
    }
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser && currentUser.username;
    } else {
      return null;
    }
  }

  getIsAdmin(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser && currentUser.IsAdmin;
    } else {
      return null;
    }
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}

