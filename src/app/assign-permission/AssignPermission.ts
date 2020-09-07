import { Role } from "./../role/Role";
import { AssignPermissionType } from "./AssignPermissionType";
import { Permission } from "../permision/permission";
export class AssignPermission implements AssignPermissionType {
  assignRolePermission: Role[];
  constructor() {}
}
