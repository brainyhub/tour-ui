import { ForgotPasswordType } from "./forgotPasswordType";
export class ForgotPassword implements ForgotPasswordType {
  userName: string;
  carrierType:string;
  constructor() {
    this.userName = "";
    this.carrierType="";
  }
    
}
