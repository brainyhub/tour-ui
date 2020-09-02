import { ForgotPasswordType } from "./forgotPasswordType";
export class ForgotPassword implements ForgotPasswordType {
  username: string;
  carrierType:string;
  constructor() {
    this.username = "";
    this.carrierType="";
  }
    
}
