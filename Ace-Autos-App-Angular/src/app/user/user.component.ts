import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {UserService} from '../shared/services/users/user.service';
import {Car} from '../shared/models/car';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.refresh();
  }

  deleteUser(id: number): any {
    this.userService.delete(id);
    location.reload();
  }

  editUser(id: number): any {
    this.userService.editUser({id: 1, username: 'Lalala', firstName: 'None', lastName: 'Dont'});
  }

  getALL(): any {
    this.userService.getALL().subscribe(data => {
      console.log(data);
    });
  }

  refresh(): any {
    console.log('Refreshing');
    this.userService.getALL()
      .subscribe(listOfUsers => {
        this.user = listOfUsers;
        console.log(listOfUsers);
      }, error => console.log(error.message));
  }
}
