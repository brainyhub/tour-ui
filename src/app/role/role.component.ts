import { Component, OnInit } from '@angular/core';
import { RoleService } from "./../service/role.service";
import { Role } from './Role';
import { RoleType } from './RoleType';
import { PermissionService } from '../service/permission.service';
import { Permission } from '../permision/permission';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  role:  Role;
  deleteRoleRecord: RoleType[];
  constructor(private roleService: RoleService) {
    this.getRoles();
  }
  ngOnInit() {
    
  }
  getRoles() {
    this.roleService.getAllRoles().subscribe((data) => {
      console.log(data);
      this.role = data;
    });
  }
}
