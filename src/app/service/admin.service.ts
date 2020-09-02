import { ServiceConstants } from "./service.constants";
import { MenuService } from "./menu.service";
import { Observable } from "rxjs";
import { LoginRequest } from "./../domain/loginRequest";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient, private menuService: MenuService) {}
  public validateUser(loginrequest: LoginRequest): Observable<any> {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEyMyIsImV4cCI6MTU5OTAzMjkxOSwiaWF0IjoxNTk5MDE0OTE5fQ.v65YCT8xb9glRgTQcehz73a9jO63bjraYiA7wVkk8AYZf655HtEunXFEzg-WKq8KG6pPr9Go1dc0-Cg08tc8QQ",
    };
    return this.http.post<any>(ServiceConstants.loginUrl, loginrequest, {
      headers,
    });
  }
  setUpUserData(response: any) {
    sessionStorage.setItem("user-info", JSON.stringify(response));
    sessionStorage.setItem("token", response.token);
    sessionStorage.setItem(
      "menu-data",
      JSON.stringify(this.menuService.getApplicaleMenus())
    );
  }
}
