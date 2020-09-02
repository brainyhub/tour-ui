import { Injectable } from "@angular/core";
import { ServiceConstants } from "./service.constants";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChangePasswordType } from "../change-password/changePasswordType";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ChangePasswordService {
  constructor(private http: HttpClient) {}
  public changepassword(password: ChangePasswordType): Observable<any> {
    const headers = {
      Authorization:"",
    };
    return this.http.post<any>(ServiceConstants.changePasswordUrl, password, {
      headers,
    });
  }
}
