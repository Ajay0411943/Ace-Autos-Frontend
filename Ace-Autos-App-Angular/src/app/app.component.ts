import { Component } from '@angular/core';
import {AuthenticationService} from './shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authenticationService: AuthenticationService, private  router: Router) {
  }
  currentUser = this.authenticationService.getToken();
  title = 'Ace Autos';

  logout(): any {
    this.authenticationService.logout();
    this.router.navigate(['/']);
    window.location.reload();
  }
}
