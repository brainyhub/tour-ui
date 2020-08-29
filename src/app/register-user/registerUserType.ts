export interface RegisterUserType{
    "email": string,
    "password": string,
    "phone": string,
    "rolePermission": Number,
    "roles": [
      {
        "commaSeperatedPermission": string,
        "role":number
      }
    ],
    "username": string
  }