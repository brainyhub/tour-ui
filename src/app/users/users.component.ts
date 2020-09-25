import { Component, OnInit } from '@angular/core';
import { UserService } from "./../service/user.service";
import { UserType } from './UserType';
import { UserRoleType } from './UserRoleType';
import { AssignRoleType } from './AssignRoleType';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserType;
  assignRoleType: UserRoleType;
  roleAssignType: AssignRoleType;
  constructor(private userService: UserService) {
    this.userData();
    this.roles();
   }
  ngOnInit() {
    this.roleAssignType = {
      roleIds: [],
      userId: 0
    }
  }
  userData(){
    this.userService.getUser().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
  roles(){
    this.userService.getRole().subscribe((data) => {
      console.log(data);
      this.assignRoleType = data;
    });
  }
  getAssignedRole($event, userId: Number){
    let roleId = $event.target.options[$event.target.options.selectedIndex].value;
    this.roleAssignType.roleIds = roleId;
    this.roleAssignType.userId = userId;        
  }
  assignRole(){
    this.userService.roleAssign(this.roleAssignType).subscribe((response) => {
      console.log(response);
    },
      (error) => console.log("Error!", error)
    );
  }
}