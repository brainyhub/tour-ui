export interface RegisterUserType {
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
}
