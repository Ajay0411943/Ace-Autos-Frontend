import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authenticationService: AuthenticationService, private  router: Router) {
  }
  currentUser = this.authenticationService.getToken();
  isLoggedIn: boolean;
  title = 'Ace Autos';
  isAdmin: boolean;
  /** Boolean values are used to store true or false values.*/

  logout(): any {
    this.authenticationService.logout();
    this.router.navigate(['login']);
    window.location.reload();
  }

  ngOnInit(): void {
    this.authenticationService.isLoggedIn().subscribe(loggedIn => this.isLoggedIn = loggedIn);
    this.authenticationService.isLogAdmin().subscribe(loggedIn => this.isAdmin = loggedIn);
  }
}
