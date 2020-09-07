import { RoleType } from "./RoleType";
import { Permission } from "../permision/permission";
export class Role implements RoleType {
  id: Number;
  name: string;
  permissions: Permission[];
  selected: Boolean = false;
  constructor() {
    this.selected = false;
  }
}
