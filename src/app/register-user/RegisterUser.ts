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
          commaSeperatedPermissions: "1,2,3,4,5,6,7,8,9,10",
          role: 1,
        },
      ],
    };
  }
}
