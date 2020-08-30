import { TripResponseType } from "./../trip/tripResponseType";
import { TripReport } from "./../trip/tripReportType";
import { TripService } from "./../service/trip.service";
import { ReportService } from "../service/report.service";
import { MenuService } from "../service/menu.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  config: any;
  collection = [];
  urlRecords: string = "http://localhost:8080/tour/api/ver01/tripservice/trip";
  urlMenus: string = "http://localhost:8080/tour/adminService/permissions";
  headerJson: any[];
  applicableMenus = [];
  applicableReports = [];
  diplayRecordCount: Number = 2;
  tripResponse: TripResponseType[] = [];

  constructor(private http: HttpClient, private tripService: TripService) {}
  ngOnInit() {
    this.getPreviousDayReport();
  }
  getTodayReport() {
    var currDate = new Date().toISOString().slice(0, 10);
    this.getTripRecords(currDate, currDate);
  }
  getNextDayReport() {
    var day = 0;
    var fromDt = new Date().toISOString().slice(0, 10);
    var currDate = new Date();
    currDate.setDate(currDate.getDate() + day);
    var toDt = currDate.toISOString().slice(0, 10);
    this.getTripRecords(fromDt, toDt);
  }

  getPreviousDayReport() {
    var day = 100;
    var toDt = new Date().toISOString().slice(0, 10);
    var currDate = new Date();

    currDate.setDate(currDate.getDate() - day);
    var fromDt = currDate.toISOString().slice(0, 10);
    this.getTripRecords(fromDt, toDt);
  }

  getTripRecords(fromDt, toDt) {
    let tripReport: TripReport = {
      companyId: null,
      departmentId: null,
      driverId: null,
      firstPickTime: null,
      firstPickUpPoint: null,
      lastDroPoint: null,
      packageId: null,
      reasonForChange: null,
      riderFirstName: null,
      riderMobile: null,
      status: null,
      tripId: null,
      triptTitle: null,
      vehicleId: null,
      tripCreateDtTo: null,
      tripCreateDtFrom: null,
    };
    alert(fromDt + "-" + toDt);
    tripReport.tripCreateDtFrom = fromDt + "T00:00:00.000Z";
    tripReport.tripCreateDtTo = toDt + "T24:00:00.000Z";
    tripReport.status = 1;
    this.tripService.generateReport(tripReport).subscribe((data) => {
      this.tripResponse = data;
    });
  }
  reportClick(url) {}
}
