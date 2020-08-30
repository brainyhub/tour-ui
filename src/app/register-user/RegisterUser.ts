import { RegisterUserType } from "./registerUserType";
export class RegisterUser implements RegisterUserType {
  email: string;
  password: string;
  phone: string;
  rolePermission: {
    roles: [
      {
        commaSeperatedPermissions: string;
        role: Number;
      }
    ];
  };
  username: string;
  constructor() {
    this.email = "";
    this.password = "";
    this.phone = "";
    this.username = "";
    this.rolePermission = {
      roles: [
        {
          commaSeperatedPermissions: "1",
          role: 1,
        },
      ],
    };
  }
}
