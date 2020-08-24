import { ReportService } from './service/report.service';
import { Component ,OnInit, OnChanges} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{
  isLogin:Boolean=false;
  
  ngOnInit() {
    
  }
  ngOnChanges(){

  }
  constructor(private router: Router){
    
  }
   
}
