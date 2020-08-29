import { Injectable } from '@angular/core';
import { ServiceConstants } from './service.constants';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RegisterUserType } from './../register-user/registerUserType';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }
  public registerNewUser(register:RegisterUserType) : Observable <any>{
    return this.http.post<any>(ServiceConstants.registerUserUrl,register);
  }
}
