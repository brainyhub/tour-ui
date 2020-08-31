import { RegisterUserService } from "./../service/register-user.service";
import { UpdateUser } from "./UpdateUser";
import { RegisterUser } from "./../register-user/RegisterUser";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  //  editUser: EditUser;
  constructor(private userService: RegisterUserService) {}
  editMode: Boolean = false;
  isDebugMode: Boolean = false;
  recordUpdated: Boolean = false;
  user: RegisterUser = new RegisterUser();
  updateUser: UpdateUser = new UpdateUser();
  setEditMode(flg: Boolean) {
    this.editMode = flg;
  }
  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user-info"));
    console.log("userinfo");
    console.log(this.user);
    this.setEditData();
  }
  setEditData() {
    this.updateUser.username = this.user.username;
    this.updateUser.email = this.user.email;
    this.updateUser.phone = this.user.phone;
  }
  setUserUpdatedData() {
    this.user.username = this.updateUser.username;
    this.user.email = this.updateUser.email;
    this.user.phone = this.updateUser.phone;
    sessionStorage.setItem("user-info", JSON.stringify(this.user));
  }
  updateUserProfileToDb() {
    this.userService.updateUser(this.updateUser).subscribe((data) => {
      console.log("Updated");
      this.setUserUpdatedData();
      this.editMode = false;
      this.recordUpdated = true;
    });
  }
}
