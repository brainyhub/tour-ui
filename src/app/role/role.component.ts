import { Component, OnInit, OnChanges } from '@angular/core';
import { RoleService } from "./../service/role.service";
import { Role } from './Role';
import { RoleType } from './RoleType';
import { AddRoleType } from './addRoleType';
import { PermissionService } from '../service/permission.service';
import { Permission } from '../permision/permission';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit, OnChanges {
  role: RoleType;
  deleteRoleRecord: RoleType[];
  newRole: AddRoleType;
  dtOptions: any = {};
  constructor(private roleService: RoleService) {
    this.getRoles();
  }
  ngOnChanges() {
    this.getRoles();
  }
  ngOnInit() {
    this.getRoles();
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['print', 'excel', 'pdf']
    };
    this.newRole = {
      id: 0,
      name: ""
    }
  }
  getRoles() {
    this.roleService.getAllRolesWithoutPermission().subscribe((data) => {
      console.log(data);
      this.role = data;
      this.deleteRoleRecord = data;
    });
  }
  addRole() {
    this.roleService.newRoleToDB(this.newRole).subscribe((data) => {
      this.getRoles();
    });
  }
  deleteRole(record: any) {
    this.roleService.deletePermissions(this.deleteRoleRecord).subscribe((data) => {
    let count = 0;
    for (let obj of this.deleteRoleRecord) {
      if (obj.id === record.id) {
        this.deleteRoleRecord.splice(count, 1);
      }
      count++;
    }
    });
  }
}
