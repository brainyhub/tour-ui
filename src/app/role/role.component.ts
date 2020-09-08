import { Component, OnInit } from '@angular/core';
import { RoleService } from "./../service/role.service";
import { Role } from './Role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  constructor(private roleService: RoleService) {}
  role:  Role = new Role();
  ngOnInit() {
    this.getRoles();
  }
  getRoles() {
    this.roleService.getAllRoles().subscribe((data) => {
      console.log(data);
      this.role = data;
      
    });
  }
}
