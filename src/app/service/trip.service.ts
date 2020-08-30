import { ServiceConstants } from "./service.constants";
import { CreateTripType } from "./../trip/createTripType";
import { UpdateTripType } from "./../trip/updateTripType";
import { TripReport } from "./../trip/tripReportType";
import { MenuService } from "./menu.service";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TripService {
  constructor(private http: HttpClient, private menuService: MenuService) {}

  public getTripRecords(): Observable<any> {
    var header = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")
      ),
    };
    return this.http.get<any>(ServiceConstants.newTripUrl, header);
  }
  public generateReport(report: TripReport): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.tripReportUrl, report, {
      headers,
    });
  }
  public createNewTrip(createTrip: CreateTripType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.newTripUrl, createTrip, {
      headers,
    });
  }
  public updateTripToDb(currentUpdateTrip: UpdateTripType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(
      ServiceConstants.updateTripUrl,
      currentUpdateTrip,
      { headers }
    );
  }
}
