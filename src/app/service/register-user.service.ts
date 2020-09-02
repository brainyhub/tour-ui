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
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEyMyIsImV4cCI6MTU5OTAzMjkxOSwiaWF0IjoxNTk5MDE0OTE5fQ.v65YCT8xb9glRgTQcehz73a9jO63bjraYiA7wVkk8AYZf655HtEunXFEzg-WKq8KG6pPr9Go1dc0-Cg08tc8QQ",
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
