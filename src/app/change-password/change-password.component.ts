import { Component, OnInit } from '@angular/core';
import { ChangePassword } from "./ChangePassword";
import { Router,ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { ChangePasswordService } from "../service/change-password.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassword:ChangePassword;
  changeForm:FormGroup;
  loading = false;
  submitted = false;
  passwordMismatch: Boolean = false;
 
  constructor(private formBuilder: FormBuilder, private router: Router,private changePasswordService:ChangePasswordService,private activatedroute :ActivatedRoute ) { }

  ngOnInit() {
    this.changePassword= new ChangePassword();
    this.changeForm=this.formBuilder.group({
      otp: ["", [Validators.required, Validators.minLength(6)]],
      password1:["", [Validators.required, Validators.minLength(5)]],
      password2:["", [Validators.required, Validators.minLength(5)]],
    });
  }
  passwordCheck() {  
    if (this.changePassword.userPassword != this.changeForm.value.password2) {
      this.passwordMismatch = true;
      this.changeForm.controls["password2"].setErrors({ incorrect: true });
    } else {
      this.passwordMismatch = false;
      this.changeForm.controls["password2"].setErrors(null);
    }
  }
  get f() {
    return this.changeForm.controls;
  }
  onFormSubmit() {
    this.submitted = true;
    if(this.changeForm.valid){
      this.activatedroute.params.subscribe(data=>{
        this.changePassword.userName=""+data.username;
      })  
      this.changePasswordService.changepassword(this.changePassword).subscribe(
        (response) => {
          console.log("success", response)
          alert("successfully change passwors now login");
          this.router.navigate(['/login']);
        },
        (error) => console.log("Error!", error)
      )
    }
    console.log(this.changeForm.value);
    console.log(this.changePassword);
    this.loading=true;
  }
}
