import { ServiceConstants } from "./service.constants";
import { MenuService } from "./menu.service";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { identifierModuleUrl } from '@angular/compiler';
import { TripIdType } from './../trip-management/tripIdType';
import { TripPassangerType } from './../trip-management/tripPassangerType';
import { VehicleDriverType } from './../trip-management/vehicleDriverType';
@Injectable({
  providedIn: "root",
})
export class TripManagementService {
  constructor(private http: HttpClient, private menuService: MenuService) {}

  public checkid(id : Number): Observable<any> {
    var header = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")
      ),
    };
    return this.http.get<any>(ServiceConstants.checkIdUrl+id, header);
  }
  public vehicleDriverAssignment (VehicleDriver: VehicleDriverType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.put<any>(ServiceConstants.vehicleDriverAssignmentUrl,VehicleDriver,{ headers }
      );
    }
    public tripStart(id: TripIdType): Observable<any> {
      const headers = {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      };
      return this.http.put<any>(ServiceConstants.tripStartUrl,id,{ headers });
    }
    public tripPanic(id: TripIdType): Observable<any> {
      const headers = {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      };
       return this.http.put<any>(ServiceConstants.tripPanicUrl,id,{ headers }
        );
    }
    public tripConfirmation(id: TripIdType): Observable<any> {
      const headers = {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      };
       return this.http.put<any>(ServiceConstants.tripConfirmationUrl,id,{ headers }
        );
    }
    public tripComplete(id: TripIdType): Observable<any> {
      const headers = {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      };
       return this.http.put<any>(ServiceConstants.tripCompleteUrl,id,{ headers }
        );
    }
    public tripBreakdown(id: TripIdType): Observable<any> {
      const headers = {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      };
       return this.http.put<any>(ServiceConstants.tripBreakdownUrl,id,{ headers }
        );
    }
    public tripCancel(id: TripIdType): Observable<any> {
      const headers = {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      };
       return this.http.put<any>(ServiceConstants.tripCancelUrl,id,{ headers }
        );
    }
    public tripPassangerChange(tripPassanger: TripPassangerType): Observable<any> {
      const headers = {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      };
       return this.http.put<any>(ServiceConstants.tripPassangerChangeUrl,tripPassanger,{ headers }
        );
    }
    
}