import { Permission } from "../permision/permission";

export interface RoleType {
  id: Number;
  name: string;
  permissions: Permission[];
  selected: Boolean;
}
