import { ReportService } from '../service/report.service';
import { MenuService } from '../service/menu.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TRIPSTRUCT} from '../service/tables/db_trip';
import { COMPANYSTRUCT} from '../service/tables/db_company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router){
   // this.router.navigate(['/trip']);
  }
  ngOnInit(){
    this.router.navigate(['/trip']);
  }
/*  struct:any=COMPANYSTRUCT; 
  config: any;
  collection = [];
  url:string='http://localhost:8080/tour/api/ver01/tripservice/trip';
  urlMenus:string='http://localhost:8080/tour/adminService/permissions';
  headerJson: any[];
  applicableMenus=[];
  applicableReports=[];
  ngOnChanges(){
    console.log("ngOnChanges");
    this.config = {
      currentPage: 1,
      itemsPerPage: 2,
      totalItems: 0
    };
    this.getMenuRecords();
    this.getTableRecords(this.url);
  }
  constructor(private http: HttpClient,private menuService:MenuService,private reportService:ReportService) {
    
    this.config = {
      currentPage: 1,
      itemsPerPage: 2,
      totalItems: 0
    };
    this.getMenuRecords();
    this.getTableRecords(this.url);
  }
  getMenuRecords() {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NjY1NjgyOCwiaWF0IjoxNTk2NjM4ODI4fQ.iq2kcl_kcaHgGHl1X5X6DO0d3x0NEgNCuixog3xVJhUzD3un2YhBGOdpLRjX50iqUV7lmU69JtaHlqoY9MC0Cw')
    }
    this.http.get<any>(this.urlMenus, header).subscribe(data => {
      ////console.log(data);
      this.applicableMenus=this.menuService.getMenus(data);
      this.applicableReports=this.reportService.getAllReports(data);
      ////console.log(this.applicableMenus);
    })
  }  
  getTableRecords(url:string) {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NjY1NjgyOCwiaWF0IjoxNTk2NjM4ODI4fQ.iq2kcl_kcaHgGHl1X5X6DO0d3x0NEgNCuixog3xVJhUzD3un2YhBGOdpLRjX50iqUV7lmU69JtaHlqoY9MC0Cw')
    }
    this.http.get<any>(url, header).subscribe(data => {
      this.collection = data;
      this.struct.data=data;
      ////console.log("homepage");
      ////console.log(this.struct.data);
      this.headerJson = Object.keys(this.collection[0]);
      this.struct.headers=Object.keys(this.collection[0]);
    })
  } 
   changeTable(event){
     let selectedOpt= event.target.value;
     if("company"==selectedOpt){
      this.url='http://localhost:8080/tour/api/ver01/vvt/company';
      this.struct=COMPANYSTRUCT;
     }else{
      this.url="http://localhost:8080/tour/api/ver01/tripservice/trip";
      this.struct=TRIPSTRUCT;
     }
     this.getTableRecords(this.url);
   }
  reportClick(url){

  }*/
}
