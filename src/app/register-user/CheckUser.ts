export interface CheckUserType{
  userName : string;
}
export class CheckUser implements CheckUserType {
  userName: string;
  constructor() {
    this.userName = "";
  }
}
