import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from './../service/admin.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private service:AdminService, private formBuilder:FormBuilder) { }

  ngOnInit() {
   /* this.edit = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
    });*/
  }

  updateUser(){
   // sessionStorage.setItem("user-info", JSON.stringify(this.edit.value));
  }

}
