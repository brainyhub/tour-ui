import { ServiceConstants } from "./service.constants";
import { PackageType } from "../package/packageType";
import { PackageEditType } from "../package/packageEditType";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PackageService {
  constructor(private http: HttpClient) {}

  public getPackageRecords(): Observable<any> {
    var header = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")
      ),
    };
    return this.http.get<any>(ServiceConstants.packageUrl, header);
  }
  public createNewPackage(createPackage: PackageEditType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.packageUrl, createPackage, {
      headers,
    });
  }
  public updatePackageToDb(updatePackage: PackageEditType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.updatePackageUrl, updatePackage,{ headers }
    );
  }
}
