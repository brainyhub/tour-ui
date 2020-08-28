import { Component, OnInit } from '@angular/core';

/*export interface EditUser{
  "firstNmae": string;
  "lastName": string;
  "email": string;
  "mobile": string;
  "oldPass": string;
  "newPass": string;
  "confirmPass": string;
}*/
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
//  editUser: EditUser;
  constructor() { }

  ngOnInit() {
   /* this.editUser={
      "firstNmae": "",
      "lastName": "",
      "email": "",
      "mobile": "",
      "oldPass": "",
      "newPass": "",
      "confirmPass": ""
    };*/
  }
 /* updateUser(user, id){
    this.form.setValue({
      index: id,
      firstNmae: user.firstNmae,
      lastName: user.lastName,
      email: user.email,
      mobile: user.mobile,
      oldPass: user.oldPass,
      newPass: user.newPass,
      confirmPass: user.confirmPass
    })
  }*/
}
