import {Component, OnInit } from '@angular/core';
import {Rider} from '../domain/rider';
import {CreateTrip} from '../domain/createTrip';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  riders:Rider[]; 
  riderReq:Rider;
  createTripReq:CreateTrip;
  constructor() {
    this.riders=[];
    
    this.createTripReq={
      "companyId": 0,
    "departmentId":0,
    "driverId": 0,
    "firstPickTime": "",
    "firstPickUpPoint": "",
    "lastDroPoint": "",
    "packageId": 0,
    "riders": this.riders,
    "triptTitle": "",
    "vehicleId": 0
    };

    this.riderReq={
      "dropDateTime": "",
      "dropPoint": "",
      "email": "",
      "firstName": "",
      "lastName": "",
      "passType": "",
      "phone": "",
      "pickDateTime": "",
      "pickPoint": ""
    };
    //console.log(this.riders);
   }

  ngOnInit() {
  }
  addRider(){
    //console.log(this.riderReq);
    this.createTripReq.riders.push(this.riderReq);
    //console.log(this.riders);
  }
}
