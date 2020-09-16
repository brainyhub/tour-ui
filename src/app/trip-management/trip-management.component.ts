import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl} from "@angular/forms";
import { TripManagementService } from "./../service/tripManagement.service";
import { TripType } from "./tripType";
import { VehicleDriverType } from "./vehicleDriverType";
import { TripPassangerType } from "./tripPassangerType";
import { TripIdType } from "./tripIdType";
import { TripInfoType } from "./tripInfoType";
import { NotifyService } from "./../service/notify.service";

@Component({
  selector: 'app-trip-management',
  templateUrl: './trip-management.component.html',
  styleUrls: ['./trip-management.component.css']
})
export class TripManagementComponent implements OnInit {
  tripManagement: FormGroup;
  vehicleDriverType: VehicleDriverType;
  tripType: TripType;
  TripId:TripIdType;
  tripPassanger:TripPassangerType;
  tripInfo:TripInfoType;
  dtOptions: any = {};
  loading = false;
  submitted = false;
  viewOption:Boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private tripManagementService: TripManagementService,
    private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['print', 'excel', 'pdf']

    };
    this.tripManagement = this.formBuilder.group({
      id: ["", [Validators.required]]
    });
    this.TripId={
      tripId:0
    };
    this.tripType={
      id: 0,
      reasonForChange: "",
      trip_booking_time: "",
       trip_company_department : 
      {
         dept_address : "",
         dept_gst : "",
         dept_title : "",
         id : 0
      },
       trip_company_info : 
      {
         address :  "",
         companyTaxs : [
          {
             displayTitle :  "",
             percentOrAmout : 0,
             value : 0,
             vvtTaxType : {
               title :  ""
            }
          }
        ],
         email :  "",
         gstNo :  "",
         id : 0,
         isActive :  "",
         phone :  "",
         title :  "",
         website :  ""
      },
       trip_driver_info : {
         id : 0,
         mobileNo1 : 0,
         mobileNo2 : 0,
         name :  ""
      },
       trip_drop_point : "",
       trip_drop_time : "",
       trip_invoice_info : [
        {
           bata : 0,
           closingKm : 0,
           extraHr : 0,
           extraHrCharges : 0,
           extraKm : 0,
           extraKmCharges : 0,
           fileAttachment : "",
           finalAmount : 0,
           id : 0,
           invoiceDate : 0,
           invoiceNumber : {
             invoiceDisplayNumber : ""
          },
           openingKm : 0,
           parkingCharges : 0,
           slipNo : "",
           taxAmount : 0,
           tollCharges : 0,
           totalAmount : 0,
           totalKm : 0,
           waitingChanges : 0
        }
      ],
       trip_number : {
         tripDisplayNumber : ""
      },
       trip_package_info : {
         extraHrRate : 0,
         extraKmRate : 0,
         id : 0,
         kmPerRate : 0,
         package_rate : 0,
         package_timing : "",
         package_title : "",
         package_type : {
           title : ""
        }
      },
       trip_passanger_info : [
        {
           drop : "",
           drop_time : "",
           email : "",
           first_name : "",
           fullname : "",
           id : 0,
           last_name : "",
           phone : "",
           pickup : "",
           pickup_time : ""
        }
      ],
       trip_pick_point : "",
       trip_pick_time : "",
       trip_rout : "",
       trip_status_info : {
         value : ""
      },
       trip_vehicle_info : {
         id : 0,
         vehicleName : "",
         vehicleNo : ""
      }
    }
    this.tripPassanger={
      rider: [
        {
            dropDateTime : "" ,
            dropPoint : ""  ,
            email  : ""  ,
            firstName : ""  ,
            lastName : ""  ,
            passType : 0,
            phone : ""  ,
            pickDateTime : ""  ,
            pickPoint : ""  
        }
      ],
        tripId : 0
    }
    this.vehicleDriverType = {
      driverId : 0,
      vehicleId:0,
      tripId:0
    };
    this.tripInfo={
      companyId: 0,
      departmentId: 0,
      firstPickTime: "",
      firstPickUpPoint: "",
      lastDroPoint: "",
      packageId: 0,
      riders: [
        {
          dropDateTime: "",
          dropPoint: "",
          email: "",
          firstName: "",
          lastName: "",
          passType: 0,
          phone: "",
          pickDateTime: "",
          pickPoint: ""
        }
      ],
      tripId: 0,
      triptTitle: ""
    }
  }
  get f() {
    return this.tripManagement.controls;
  }
  getId(){
    this.TripId.tripId=this.tripType.id;
  }
  loadVehicleDriverType(){
    this.vehicleDriverType.driverId=this.tripType.trip_driver_info.id;
    this.vehicleDriverType.vehicleId=this.tripType.trip_vehicle_info.id;
    this.vehicleDriverType.tripId=this.tripType.id;
  }
  loadtripPassanger(){
    this.tripPassanger.tripId=this.tripType.id;
    this.tripPassanger.rider.splice(0,this.tripPassanger.rider.length);
    let obj: any = [];
      for (let riders of this.tripType.trip_passanger_info){
        let rider={
          dropDateTime : riders.drop_time ,
          dropPoint : riders.drop,
          email  : riders.email  ,
          firstName : riders.first_name  ,
          lastName : riders.last_name  ,
          passType : riders.id,
          phone : riders.phone  ,
          pickDateTime : riders.pickup_time  ,
          pickPoint : riders.pickup  
        }
        obj.push(rider);
      }
      this.tripPassanger.rider=obj;
  }
  addNewRider(){
    this.tripPassanger.rider.push({
      dropDateTime : "" ,
      dropPoint : ""  ,
      email  : ""  ,
      firstName : ""  ,
      lastName : ""  ,
      passType : 0,
      phone : ""  ,
      pickDateTime : ""  ,
      pickPoint : ""  
    });
  }
  deleteRider(rider: any){
    let count = 0;
    for(let riders of this.tripPassanger.rider){
      if(rider.firstName==riders.firstName){
        this.tripPassanger.rider.splice(count, 1);
        break;
      }
      count++;
    }
  }
  loadtripnfo(){
    {
      this.tripInfo.companyId=this.tripType.trip_company_info.id;
      this.tripInfo.departmentId=this.tripType.trip_company_department.id;
      this.tripInfo.firstPickTime=this.tripType.trip_pick_time;
      this.tripInfo.firstPickUpPoint=this.tripType.trip_pick_point;
      this.tripInfo.lastDroPoint=this.tripType.trip_drop_point;
      this.tripInfo.packageId=this.tripType.trip_package_info.id;
      this.tripInfo.tripId=this.tripType.id;
      //this.tripInfo.triptTitle=this.tripType.
      this.tripInfo.riders.splice(0,this.tripInfo.riders.length);
      let obj: any = [];
      for (let riders of this.tripType.trip_passanger_info){
        let rider={
          dropDateTime : riders.drop_time ,
          dropPoint : riders.drop,
          email  : riders.email  ,
          firstName : riders.first_name  ,
          lastName : riders.last_name  ,
          passType : riders.id,
          phone : riders.phone  ,
          pickDateTime : riders.pickup_time  ,
          pickPoint : riders.pickup  
        }
        obj.push(rider);
      }
      this.tripInfo.riders=obj;
    }
  }
  addNewRiders(){
    this.tripInfo.riders.push({
      dropDateTime : "" ,
      dropPoint : ""  ,
      email  : ""  ,
      firstName : ""  ,
      lastName : ""  ,
      passType : 0,
      phone : ""  ,
      pickDateTime : ""  ,
      pickPoint : ""  
    });
  }
  deleteRiders(rider: any){
    let count = 0;
    for(let riders of this.tripInfo.riders){
      if(rider.firstName==riders.firstName){
        this.tripInfo.riders.splice(count, 1);
        break;
      }
      count++;
    }
  }
  anotherId(){
    this.tripType=null;
    this.viewOption=false;
  }
  onFormSubmit() {
    this.submitted = true;
    this.tripManagementService.checkid(this.tripManagement.value.id).subscribe(
      (data) => {
        console.log(data);
        this.tripType=data;
        this.viewOption=true;
        console.log(this.tripType);
        this.notifyService.successMsg("id is valid","Success");
      },
      (error) =>{
        this.viewOption=false;
        this.tripType=null;
        console.log(this.tripType);
        this.notifyService.errorMsg(
          "Id is invalid.",
          "Error !!");
      });
  }
  changevehicleDriverRecord(){
    this.tripManagementService.vehicleDriverAssignment(this.vehicleDriverType).subscribe(
      (success) => {
        console.log("success",success);

      },
      (error) =>{
        console.log("error",error);
      });
  }
  startTrip(){
    this.tripManagementService.tripStart(this.TripId).subscribe(
      (success) => {
        console.log("success tripStart",success);

      },
      (error) =>{
        console.log("error tripStart",error);
      });
  }
  tripPanic(){
    this.tripManagementService.tripPanic(this.TripId).subscribe(
      (success) => {
        console.log("success tripPanic",success);

      },
      (error) =>{
        console.log("error tripPanic",error);
      });
  }
  tripConfirmation(){
    this.tripManagementService.tripConfirmation(this.TripId).subscribe(
      (success) => {
        console.log("success tripConfirmation",success);

      },
      (error) =>{
        console.log("error tripConfirmation",error);
      });
  }
  tripComplete(){
    this.tripManagementService.tripComplete(this.TripId).subscribe(
      (success) => {
        console.log("success tripComplete",success);

      },
      (error) =>{
        console.log("error tripComplete",error);
      });
  }
  tripBreakdown(){
    this.tripManagementService.tripBreakdown(this.TripId).subscribe(
      (success) => {
        console.log("success tripBreakdown",success);

      },
      (error) =>{
        console.log("error tripBreakdown",error);
      });
  }
  tripCancel(){
    this.tripManagementService.tripCancel(this.TripId).subscribe(
      (success) => {
        console.log("success tripCancel",success);

      },
      (error) =>{
        console.log("error tripCancel",error);
      });
  }
  tripPassangerChange(){
    this.tripManagementService.tripPassangerChange(this.tripPassanger).subscribe(
      (success) => {
        console.log("success tripPassanger",success);

      },
      (error) =>{
        console.log("error tripPassanger",error);
      });
  }
  tripInfoChange(){
    this.tripManagementService.tripInfoChange(this.tripInfo).subscribe(
      (success) => {
        console.log("success tripInfoChange",success);

      },
      (error) =>{
        console.log("error tripInfoChange",error);
      });
  }
}
