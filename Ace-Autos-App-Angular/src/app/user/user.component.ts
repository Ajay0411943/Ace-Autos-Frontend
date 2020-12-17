import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/services/authentication.service";
import {UserService} from "../shared/services/users/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  deleteUser(id: number): any {
    this.userService.delete(id);

  }

  editUser(): any {
    this.userService.editUser({id: 1, username: 'Lalala', firstName: 'None', lastName: 'Dont'});
  }

  getALL(): any {
    this.userService.getALL().subscribe(data => {
      console.log(data);
    });
  }
}
