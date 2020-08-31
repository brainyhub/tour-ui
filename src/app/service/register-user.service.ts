import { UpdateUser } from "./../user-profile/UpdateUser";
import { Injectable } from "@angular/core";
import { ServiceConstants } from "./service.constants";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RegisterUserType } from "./../register-user/registerUserType";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class RegisterUserService {
  constructor(private http: HttpClient) {}
  public registerNewUser(register: RegisterUserType): Observable<any> {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NjY1NjgyOCwiaWF0IjoxNTk2NjM4ODI4fQ.iq2kcl_kcaHgGHl1X5X6DO0d3x0NEgNCuixog3xVJhUzD3un2YhBGOdpLRjX50iqUV7lmU69JtaHlqoY9MC0Cw",
    };
    return this.http.post<any>(ServiceConstants.registerUserUrl, register, {
      headers,
    });
  }
  public updateUser(user: UpdateUser): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    user.password = null;
    return this.http.post<any>(ServiceConstants.updateUserUrl, user, {
      headers,
    });
  }
}
