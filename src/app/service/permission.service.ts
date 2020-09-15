import { Role } from "./../role/Role";
import { ServiceConstants } from "./service.constants";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PermissionType } from './../permision/PermissionType';
import { PermissionEditType } from './../permision/PermissionEditType';
import { DeletePermissionType } from './../permision/deletePermissionType';

@Injectable({
  providedIn: "root",
})
export class PermissionService {
  constructor(private http: HttpClient) {}

  public getAllPermissions(): Observable<any> {
    var header = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")
      ),
    };
    return this.http.get<any>(ServiceConstants.permissionUrl, header);
  }
  public updatePermissionToDb(updatePermission: PermissionEditType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.updatePermissionUrl, updatePermission,{ headers }
    );
  }
  public deletePermissionRecord(deletePermission: DeletePermissionType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.deletePermissionUrl, deletePermission,{ headers }
    );
  }
}
