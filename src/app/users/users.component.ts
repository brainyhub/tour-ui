import { Component, OnInit } from '@angular/core';
import { UserService } from "./../service/user.service";
import { UserType } from './UserType';
import { UserRoleType } from './UserRoleType';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserType;
  assignRoleType: UserRoleType;

  constructor(private userService: UserService) {
    this.userData();
   }

  ngOnInit() {
  }
  userData(){
    this.userService.getUser().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
  assignR(){
    this.userService.getRole().subscribe((data) => {
      console.log(data);
      this.assignRoleType = data;
    });
  }
}
