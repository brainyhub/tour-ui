import { Component, OnInit, OnChanges } from '@angular/core';
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
export class RoleComponent implements OnInit, OnChanges {
  role: RoleType;
  deleteRoleRecord: RoleType[];
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

  }
  getRoles() {
    this.roleService.getAllRolesWithoutPermission().subscribe((data) => {
      console.log(data);
      this.role = data;
      this.deleteRoleRecord = data;
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
