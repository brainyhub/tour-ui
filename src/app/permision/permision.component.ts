import { Component, OnInit } from '@angular/core';
import { PermissionService } from "./../service/permission.service";
import { Permission } from './permission';
import { PermissionType } from './permissionType';
import { PermissionEditType } from './permissionEditType';

@Component({
  selector: 'app-permision',
  templateUrl: './permision.component.html',
  styleUrls: ['./permision.component.css']
})
export class PermisionComponent implements OnInit {
  permissionData: PermissionType[];
  newPermission: PermissionEditType;
  editPermission: PermissionEditType;
  dtOptions: any = {};
  constructor(private permissionService: PermissionService) {
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
    this.newPermission = {
      id: 0,
      name: ""
    }
  }
  setEditRecord(record: PermissionType) {
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
  deletePermission(deleteP: any) {
    let count = 0;
    for (let x of this.permissionData) {
      if (x.id == deleteP.id) {
        this.permissionData.splice(count, 1);
        break;
      }
      count++;
    }
  }
  addNewPermission(){
    this.permissionService.addNew(this.newPermission).subscribe((data) => {
      this.getPermission();
    });
  }
}
