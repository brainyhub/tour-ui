import { PermissionType } from "./permissionType";
export class Permission implements PermissionType {
  id: Number;
  name: string;
  assigned: Boolean;
  selected: Boolean;
  constructor() { }
}
