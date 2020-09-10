import { Component, OnInit } from '@angular/core';
import { PermissionService } from "./../service/permission.service";
import { Permission } from './permission';
import { PermissionType } from './permissionType';
import { NotifyService } from "./../service/notify.service";

@Component({
  selector: 'app-permision',
  templateUrl: './permision.component.html',
  styleUrls: ['./permision.component.css']
})
export class PermisionComponent implements OnInit {
  permissionData: PermissionType;
  deletePermissionData: PermissionType[];
  editPermission: PermissionType;
  constructor(private permissionService: PermissionService, private notifyMsg: NotifyService) { 
    this.getPermission();
  }

  ngOnInit() {
    this.editPermission = {
      id: 0,
      name: "",
      assigned: false,
      selected: false
    }
  }
  editRecord(record: PermissionType){
    this.editPermission.id = record.id;
    this.editPermission.name = record.name;
  }
  getPermission() {
    this.permissionService.getAllPermissions().subscribe((data) => {
      console.log(data);
      this.permissionData = data;
      this.deletePermissionData = data;
    });
  }
  editPermissionRecord() {
    this.permissionService.updatePermissionToDb(this.editPermission).subscribe((response) => {
      console.log("response",  response);
    },
    (error) => console.log("Error!", error)
    );
    this.notifyMsg.successMsg("Permission updated successfully.","Permission Changed.");
    //this.getPermission();
  }
  deletePermission(data: number){
    let count = 0;
    for(let obj of this.deletePermissionData){
      if(obj.id === data){
        this.deletePermissionData.splice(count, 1);
      }
      count++;
    }
    // this.permissionService.deletePermissionRecord(this.deletePermissionData).subscribe((response) => {
    //   console.log("Deleted");
    // },
    // (error) => console.log("Error!", error)
    // );
  }
}
