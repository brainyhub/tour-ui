import { AssignPermission } from "./AssignPermission";
export class AssignPermissionRequest {
  public assignRolePermission: AssignPermission[];
  constructor() {
    this.assignRolePermission = null;
  }
}
