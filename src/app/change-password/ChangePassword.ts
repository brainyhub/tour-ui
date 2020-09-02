import { ChangePasswordType } from "./changePasswordType";
export class ChangePassword implements ChangePasswordType {
  otp: string;
  userName:string;
  userPassword:string;
  constructor() {
    this.otp="";
    this.userName="";
    this.userPassword="";
  }    
}
