import { NotifyService } from "./../service/notify.service";
import { Role } from "./../role/Role";
import { RoleService } from "./../service/role.service";
import { Component, OnInit } from "@angular/core";
import { Permission } from "../permision/permission";

@Component({
  selector: "app-assign-permission",
  templateUrl: "./assign-permission.component.html",
  styleUrls: ["./assign-permission.component.css"],
})
export class AssignPermissionComponent implements OnInit {
  private assignRolePermission: Role[];
  isDebugMode = false;
  constructor(
    private roleService: RoleService,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe((data) => {
      this.assignRolePermission = data.rolesPermissions;
    });
  }
  update() {
    let updatePermission: Role[] = [];
    this.assignRolePermission.forEach(function (role) {
      if (role.selected == true) {
        let permissionsApi: Permission[] = [];
        role.permissions.forEach(function (permiss) {
          if (
            !(permiss.assigned == false && permiss.selected == false) &&
            !(permiss.assigned == true && permiss.selected == false)
          ) {
            //console.log(permiss);
            permissionsApi.push(permiss);
          }
        });

        role.permissions = permissionsApi;
        updatePermission.push(role);
      }
    });
    this.roleService.savePermissions(updatePermission).subscribe((data) => {
      this.notifyService.successMsg(
        "Assign Permission...",
        "Permisssion changes are made successfully"
      );
    });
  }
}
