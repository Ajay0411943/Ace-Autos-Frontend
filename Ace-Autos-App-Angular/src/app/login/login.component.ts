import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  currentUser = this.authenticationService.getToken();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private  router: Router) { }

  ngOnInit(): any {
    console.log(this.currentUser);
    if (this.currentUser !== null){

      this.router.navigate(['/']);
    }
    //  Initialize the form group
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(): any {
    this.authenticationService.login(this.username.value, this.password.value);
  }

  getList(): any{
    this.http.get<any>(environment.apiURL + 'car', this.httpOptions).subscribe(data => {
      console.table(data);
    });
  }
}
