import { ServiceConstants } from "./service.constants";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AssignRoleType } from "./../users/AssignRoleType";


@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    var header = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")
      ),
    };
    return this.http.get<any>(ServiceConstants.getUserUrl, header);
  }
  public getRole(): Observable<any> {
    var header = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")
      ),
    };
    return this.http.get<any>(ServiceConstants.getRolesUrl, header);
  }
  public roleAssign(role: AssignRoleType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.assignRolesUrl, role,{ headers }
    );
  }

}
