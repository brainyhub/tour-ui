import { VVTServiceService } from "./../service/vvtservice.service";
import { TripService } from "./../service/trip.service";
import { TripResponseType } from "./tripResponseType";
import { Component, OnInit, OnChanges } from "@angular/core";
import { TripReport } from "./tripReportType";
import { CreateTripType } from "./createTripType";
import { UpdateTripType } from "./updateTripType";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { VVT } from "../service/tables/VVT";

@Component({
  selector: "app-trip",
  templateUrl: "./trip.component.html",
  styleUrls: ["./trip.component.css"],
})
export class TripComponent implements OnInit, OnChanges {
  report: TripReport;
  createTrip: CreateTripType;
  updateTrip: UpdateTripType;
  tripResponse: TripResponseType[];
  config: any;
  currentCreateTrip: CreateTripType;
  currentUpdateTrip: UpdateTripType;
  currentTripResponse: TripResponseType;
  deleteRecordEnabled: Boolean = true;
  isDebugMode = true;
  isLogin: Boolean = false;
  vvtCompanies: VVT[];
  dtOptions: any = {};
  constructor(
    private http: HttpClient,
    private router: Router,
    private tripService: TripService,
    private route: ActivatedRoute,
    private vvtService: VVTServiceService
  ) {
    this.getTripRecords();
  }
  ngOnChanges() { }
  ngOnInit() {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['print', 'excel', 'pdf']
    };
    this.vvtCompanies = this.vvtService.COMPANIES;
    this.config = {
      currentPage: 1,
      itemsPerPage: 4,
      totalItems: 0,
    };
    this.route.queryParams.subscribe(
      (params) =>
        (this.config.currentPage = params["page"] ? params["page"] : 1)
    );

    this.createTrip = {
      companyId: 1,
      departmentId: 1,
      driverId: 1,
      firstPickTime: "2020-08-20T10:13:36.248Z",
      firstPickUpPoint: "firstPickUpPoint",
      lastDroPoint: "lastDroPoint",
      packageId: 1,
      riders: [
        {
          dropDateTime: "",
          dropPoint: "dropDateTime",
          email: "string",
          firstName: "firstName",
          lastName: "lastName",
          passType: 1,
          phone: "8197700916",
          pickDateTime: "2020-08-20T10:13:36.248Z",
          pickPoint: "string",
        },
      ],
      triptTitle: "Route",
      vehicleId: 1,
    };
    this.currentUpdateTrip = {
      companyChangeRequired: false,
      companyId: 1,
      departmentChangeRequired: false,
      departmentId: 1,
      driverChangeRequired: false,
      driverId: 1,
      firstPickTime: "2020-08-19T17:59:52.479Z",
      firstPickUpPoint: "string",
      lastDroPoint: "string",
      packageChangeRequired: false,
      packageId: 1,
      reasonForChange: "string",
      riderChangeRequired: false,
      riders: [
        {
          id: 0,
          dropDateTime: "2020-08-19T17:59:52.479Z",
          dropPoint: "string",
          email: "string",
          firstName: "string",
          lastName: "string",
          passType: 1,
          phone: "string",
          pickDateTime: "2020-08-19T17:59:52.479Z",
          pickPoint: "string",
        },
      ],
      status: 0,
      statusChangeRequired: false,
      tripId: 1,
      tripInfoChangeRequired: false,
      triptTitle: "string",
      vehicleChangeRequired: false,
      vehicleId: 1,
    };
    this.report = {
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
  }
  modifyRecord(trip: TripResponseType) {
    console.log("modifyRecord");
    console.log(trip);
    this.currentUpdateTrip.tripId = trip.id;
    this.currentUpdateTrip.companyId = trip.trip_company_info.id;
    this.currentUpdateTrip.departmentId = trip.trip_company_department.id;
    this.currentUpdateTrip.driverId = trip.trip_driver_info.id;
    this.currentUpdateTrip.firstPickTime = trip.trip_pick_time;
    this.currentUpdateTrip.firstPickUpPoint = trip.trip_pick_point;
    this.currentUpdateTrip.lastDroPoint = trip.trip_drop_point;
    this.currentUpdateTrip.packageId = trip.trip_package_info.id;
    this.currentUpdateTrip.triptTitle = trip.trip_rout;
    this.currentUpdateTrip.vehicleId = trip.trip_vehicle_info.id;

    let ridersObj: any = [];
    for (let ride of trip.trip_passanger_info) {
      let passanger = {
        id: ride.id,
        dropDateTime: ride.drop_time,
        dropPoint: ride.drop,
        email: ride.email,
        firstName: ride.first_name,
        lastName: ride.last_name,
        passType: 0,
        phone: ride.phone,
        pickDateTime: ride.pickup_time,
        pickPoint: ride.pickup,
      };
      ridersObj.push(passanger);
    }
    this.currentUpdateTrip.riders = ridersObj;
  }

  viewRecord(trip: TripResponseType) {
    this.deleteRecordEnabled = false;
    this.currentTripResponse = trip;
  }
  deleteRecord(trip: TripResponseType) {
    this.deleteRecordEnabled = true;
    this.currentTripResponse = trip;
  }
  addNewRider() {
    this.createTrip.riders.push({
      dropDateTime: "",
      dropPoint: "",
      email: "",
      firstName: "",
      lastName: "",
      passType: 0,
      phone: "",
      pickDateTime: "",
      pickPoint: "",
    });
  }
  addNewUpdateRider() {
    this.currentUpdateTrip.riders.push({
      id: 0,
      dropDateTime: "",
      dropPoint: "",
      email: "",
      firstName: "",
      lastName: "",
      passType: 0,
      phone: "",
      pickDateTime: "",
      pickPoint: "",
    });
  }
  deleteNewlyAddedRider(riderReq: any) {
    let count = 0;
    for (let rider of this.createTrip.riders) {
      if (rider.phone == riderReq.phone) {
        this.createTrip.riders.splice(count, 1);
        break;
      }
      count++;
    }
  }
  deleteNewlyAddedRiderFromUpdate(riderReq: any) {
    let count = 0;
    for (let rider of this.currentUpdateTrip.riders) {
      if (rider.phone == riderReq.phone) {
        this.currentUpdateTrip.riders.splice(count, 1);
        break;
      }
      count++;
    }
  }
  getTripRecords() {
    this.tripService.getTripRecords().subscribe((data) => {
      console.log("All trips");
      console.log(data);
      this.tripResponse = data;
    });
  }
  generateReport() {
    this.tripService.generateReport(this.report).subscribe((data) => {
      this.tripResponse = data;
    });
  }
  createNewTrip() {
    this.tripService.createNewTrip(this.createTrip).subscribe((data) => {
      this.getTripRecords();
    });
  }
  updateTripToDb() {
    this.tripService
      .updateTripToDb(this.currentUpdateTrip)
      .subscribe((data) => {
        this.getTripRecords();
        console.log(this.tripResponse);
      });
  }
  pageChange(newPage: number) {
    this.router.navigate(["site/trip"], { queryParams: { page: newPage } });
  }
}
