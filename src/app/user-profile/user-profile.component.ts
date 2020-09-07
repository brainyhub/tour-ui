import { RegisterUserService } from "./../service/register-user.service";
import { UpdateUser } from "./UpdateUser";
import { RegisterUser } from "./../register-user/RegisterUser";
import { Component, OnInit } from "@angular/core";
import { NotifyService } from "./../service/notify.service";
import { FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  //  editUser: EditUser;
  constructor(private userService: RegisterUserService, private notifyMsg: NotifyService, private fBuilder: FormBuilder) {}
  editMode: Boolean = false;
  isDebugMode: Boolean = false;
  recordUpdated: Boolean = false;
  user: RegisterUser = new RegisterUser();
  updateUser: UpdateUser = new UpdateUser();
  updationForm: FormGroup;
  submitted = false;
  passwordMismatch: Boolean = false;
  setEditMode(flg: Boolean) {
    this.editMode = flg;
  }
  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user-info"));
    console.log("userinfo");
    console.log(this.user);
    this.setEditData();  

    this.updationForm = this.fBuilder.group({
      email: ["", Validators.required],
      password1: ["", [Validators.required, Validators.minLength(8)]],
      password2: ["", Validators.required],
      phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      username: ["", Validators.required]
    });
  }
  setEditData() {
    this.updateUser.username = this.user.username;
    this.updateUser.email = this.user.email;
    this.updateUser.phone = this.user.phone;
    //this.updateUser.password = this.user.password;
  }
  setUserUpdatedData() {
    this.user.username = this.updateUser.username;
    this.user.email = this.updateUser.email;
    this.user.phone = this.updateUser.phone;
   // this.user.password = this.updateUser.password;
    sessionStorage.setItem("user-info", JSON.stringify(this.user));
  }
  get f() {
    return this.updationForm.controls;
  }
  passwordCheck() {
    if (this.updateUser.password != this.updationForm.value.password2) {
      this.passwordMismatch = true;
      this.updationForm.controls["password2"].setErrors({ incorrect: true });
    } else {
      this.passwordMismatch = false;
      this.updationForm.controls["password2"].setErrors(null);
    }
  }
  updateUserProfileToDb() {
    this.submitted = true;
    if(this.updationForm.valid && !this.passwordMismatch){
      this.userService.updateUser(this.updateUser).subscribe((data) => {
        console.log("Updated");
        this.setUserUpdatedData();
        this.editMode = false;
        this.recordUpdated = true;
        this.notifyMsg.successMsg("Profile updated successfully.","Profile Changed.");
      });
    }
  }
}
