import { Component, OnInit } from '@angular/core';
import { PermissionService } from "./../service/permission.service";
import { Permission } from './permission';

@Component({
  selector: 'app-permision',
  templateUrl: './permision.component.html',
  styleUrls: ['./permision.component.css']
})
export class PermisionComponent implements OnInit {
  permissionData: Permission;
  constructor(private permissionService: PermissionService) { 
    this.getPermission();
  }

  ngOnInit() {
  }
  getPermission() {
    this.permissionService.getAllPermissions().subscribe((data) => {
      console.log(data);
      this.permissionData = data;
    });
  }
}
