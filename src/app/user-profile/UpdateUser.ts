import { UpdateUserType } from "./updateUserType";
export class UpdateUser implements UpdateUserType {
  email: string;
  password: string;
  phone: string;
  username: string;
  constructor() {
    this.email = "";
    this.password = "";
    this.phone = "";
    this.username = "";
  }
}
