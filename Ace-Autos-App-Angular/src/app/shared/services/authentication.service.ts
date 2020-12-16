import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  private isLoggedAdmin: BehaviorSubject<boolean>;
  constructor(private http: HttpClient) {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
    this.isLoggedAdmin = new BehaviorSubject<boolean>(false);
  }

    isLoggedIn(): Observable<boolean>  {
    if (this.getToken()){
      this.isLoggedInSubject.next(true);
      }
    return this.isLoggedInSubject;
    }

  isLogAdmin(): Observable<boolean>  {
    if (this.getIsAdmin()){
      this.isLoggedAdmin.next(true);
    }
    return this.isLoggedAdmin;
  }

  login(username: string, password: string): Observable<boolean> {

    /*
     const user = {username, password};
     this.http.post<any>('https://localhost:44360/api/token', user).subscribe(
       data => {
         const token = data.token;
         console.log(token);
         const decodedToken = jwt_decode(token);
         // login successful if there's a jwt token in the response
         if (token) {
           // store username and jwt token in local storage to keep user logged in between page refreshes
          this.setUpStorage(decodedToken, data);
          window.location.reload();
           // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
           return false;
         }
       },
       error => console.log('oops', error)
     );
     return;*/

    // console.log('lets go');
    // const user = {username, password};
    // const url = 'https://localhost:44360/api/token';
    // const result = this.http.post<any>(url, {username, password}).pipe(map(response => {
    //   console.log("Flag");
    //   const token = response.token;
    //   console.log("token");
    //   // login successful if there's a jwt token in the response
    //   if (token) {
    //     // store username and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token}));
    //     // window.location.reload();
    //     // return true to indicate successful login
    //     return true;
    //   } else {
    //     // return false to indicate failed login
    //     return false;
    //   }
    // }));
    // console.log("Game");
    // return result;


     // console.log('lets go');
     // const user = {username, password};
     // this.http.post<any>('https://localhost:44360/api/token', user).subscribe(
     //   data => {
     //     const token = data.token;
     //     console.log(token);
     //     // login successful if there's a jwt token in the response
     //     if (token) {
     //       // store username and jwt token in local storage to keep user logged in between page refreshes
     //      localStorage.setItem('currentUser', JSON.stringify({ username, token}));
     //      window.location.reload();
     //       // return true to indicate successful login
     //      return true;
     //    } else {
     //      // return false to indicate failed login
     //       return false;
     //     }
     //   },
     //   error => console.log('oops', error)
     // );
     // return;


     return this.http.post<any>(environment.apiURL + 'token', {username, password})
      .pipe(map(response => {
        const token = response.token;
        const decodedToken = jwt_decode(token);
        if (token){
          this.setUpStorage(decodedToken, response);
          this.isLoggedInSubject.next(true);
          this.isLoggedAdmin.next(true);
          window.location.reload();
          return true;
        } else{
          this.isLoggedInSubject.next(false);
          this.isLoggedAdmin.next(false);
          return false;
        }
      }));
  }

  setUpStorage(decodedToken, response): void {
    let currentUser = null;
    if ( 'Administrator' === decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']){
      currentUser = JSON.stringify({
        username: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        IsAdmin: true,
        token: response.token
      });
    } else {
      currentUser = JSON.stringify({
        username: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        currentRole: decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
        token: response.token
      });
    }
    this.logout(); // Delete existing user
    console.log(currentUser);
    localStorage.setItem('currentUser', currentUser);
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
    this.isLoggedInSubject.next(false);
    this.isLoggedAdmin.next(false);
    localStorage.removeItem('currentUser');
  }

}



