import { RoleType } from "./../role/RoleType";
import { Role } from "./../role/Role";
import { ServiceConstants } from "./service.constants";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  constructor(private http: HttpClient) { }

  public getAllRolesWithoutPermission(): Observable<any> {
    var header = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")
      ),
    };
    return this.http.get<any>(ServiceConstants.getRolesUrl, header);
  }
  public getAllRoles(): Observable<any> {
    var header = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")
      ),
    };
    return this.http.get<any>(ServiceConstants.rolesUrl, header);
  }
  public savePermissions(updatePermission: Role[]): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(
      ServiceConstants.permissionAddUrl,
      { rolesPermissions: updatePermission },
      {
        headers,
      }
    );
  }

  public deletePermissions(updateRole: RoleType[]): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(
      ServiceConstants.deleteRolesUrl,
      { rolesPermissions: updateRole },
      {
        headers,
      }
    );
  }
}
