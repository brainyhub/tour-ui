export interface CheckUserType{
  userName : string;
  email : string;
}
export class CheckUser implements CheckUserType {
  userName: string;
  email: string;
  constructor() {
    this.userName = "";
  }
}
