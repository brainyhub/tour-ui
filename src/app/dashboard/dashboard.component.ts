import { TripService } from './../service/trip.service';
import { ReportService } from '../service/report.service';
import { MenuService } from '../service/menu.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  config: any;
  collection = [];
  urlRecords:string='http://localhost:8080/tour/api/ver01/tripservice/trip';
  urlMenus:string='http://localhost:8080/tour/adminService/permissions';
  headerJson: any[];
  applicableMenus=[];
  applicableReports=[];
  diplayRecordCount:Number=2;
 

  constructor(private http: HttpClient,private tripService:TripService) {
    
    //this.getMenuRecords();
    //this.getTableRecords();
  }
  ngOnInit(){
    this.getTripRecords();
  }
  getTripRecords() {
    this.tripService.getTripRecords().subscribe(data => {
      this.collection=data.splice(0,3);
    })
  } 
  reportClick(url){

  }
}
