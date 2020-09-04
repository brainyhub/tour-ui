import { ServiceConstants } from './service.constants';
import { CreateCompanyType } from './../company/createCompanyType';
import { UpdateCompanyType } from './../company/updateCompanyType';
import { CompanyReport } from './../company/companyReportType';
import { MenuService } from './menu.service';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient,private menuService:MenuService) { }

  public getCompanyRecords(): Observable<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer '+sessionStorage.getItem("token"))
    }
    return this.http.get<any>(ServiceConstants.newCompanyUrl,header);
  } 
  public generateReport(report:CompanyReport): Observable<any>{
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem("token") }
    return this.http.post<any>(ServiceConstants.companyReportUrl, report,{headers});
  }
  public createNewCompany(createCompany:CreateCompanyType): Observable<any>{
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem("token") }
    return this.http.post<any>(ServiceConstants.newCompanyUrl, createCompany,{headers});
  }
  public updateCompanyToDb(currentUpdateCompany:UpdateCompanyType): Observable<any>{
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem("token") }
    return this.http.post<any>(ServiceConstants.updateCompanyUrl, currentUpdateCompany,{headers}); 
  }
}
