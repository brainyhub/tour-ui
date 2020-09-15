import { Component, OnInit } from '@angular/core';
import { PermissionService } from "./../service/permission.service";
import { Permission } from './permission';
import { PermissionType } from './permissionType';
import { PermissionEditType } from './permissionEditType';
import { DeletePermissionType } from './deletePermissionType';
import { NotifyService } from "./../service/notify.service";

@Component({
  selector: 'app-permision',
  templateUrl: './permision.component.html',
  styleUrls: ['./permision.component.css']
})
export class PermisionComponent implements OnInit {
  permissionData: PermissionType;
  deletePermissionData: DeletePermissionType;
  editPermission: PermissionEditType;
  dtOptions: any = {};
  constructor(private permissionService: PermissionService, private notifyMsg: NotifyService) {
    this.getPermission();
  }

  ngOnInit() {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['print', 'excel', 'pdf']

    };
    this.getPermission();
    this.editPermission = {
      id: 0,
      name: ""
    }
  }

  editRecord(record: PermissionType) {
    this.editPermission.id = record.id;
    this.editPermission.name = record.name;
  }
  getPermission() {
    this.permissionService.getAllPermissions().subscribe((data) => {
      console.log(data);
      this.permissionData = data;
    });
  }
  editPermissionRecord() {
    this.permissionService.updatePermissionToDb(this.editPermission).subscribe((response) => {
      console.log("response", response);
    },
      (error) => console.log("Error!", error)
    );
  }
  deletePermission() {
    this.permissionService.deletePermissionRecord(this.deletePermissionData).subscribe((response) => {
      console.log("response", response);
    },
      (error) => console.log("Error!", error)
    );
  }
}
