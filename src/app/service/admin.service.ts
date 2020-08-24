import { ServiceConstants } from './service.constants';
import { MenuService } from './menu.service';
import { Observable } from 'rxjs';
import { LoginRequest } from './../domain/loginRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,private menuService:MenuService) { }
  public validateUser(loginrequest:LoginRequest): Observable<any>{
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NjY1NjgyOCwiaWF0IjoxNTk2NjM4ODI4fQ.iq2kcl_kcaHgGHl1X5X6DO0d3x0NEgNCuixog3xVJhUzD3un2YhBGOdpLRjX50iqUV7lmU69JtaHlqoY9MC0Cw' }
    return this.http.post<any>(ServiceConstants.loginUrl, loginrequest,{headers});
  }
  setUpUserData(response:any){
    sessionStorage.setItem("user-info",JSON.stringify(response));
    sessionStorage.setItem("token",response.token);
    sessionStorage.setItem("menu-data",JSON.stringify(this.menuService.getApplicaleMenus()));
    
  }
}
