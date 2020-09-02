import { CompanyService } from './../service/company.service';
import { CompanyResponseType } from './companyResponseType';
import { Component, OnInit,OnChanges } from '@angular/core';
import { CompanyReport } from './companyReportType';       
import { CreateCompanyType } from './createCompanyType';
import {UpdateCompanyType } from './updateCompanyType';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
 
  report:CompanyReport;
  createCompany:CreateCompanyType;
  updateCompany:UpdateCompanyType;
  companyResponse: CompanyResponseType[];
  config: any;
  currentCreateCompany:CreateCompanyType;
  currentUpdateCompany:UpdateCompanyType;
  currentCompanyResponse: CompanyResponseType;
  deleteRecordEnabled:Boolean=true;
  isDebugMode=false;
  isLogin:Boolean=false;

  addcompany:FormGroup;

      address :  FormControl;
      email :  FormControl
      gstNo :  FormControl;
      isActive : FormControl;
      phone :  FormControl;
      title :  FormControl;
      website :  FormControl;
      
constructor(private http: HttpClient,private router: Router, private formBuilder : FormBuilder, private companyService:CompanyService,private route:ActivatedRoute) { 
    console.log("constructor CompanyComponent");
    this.getCompanyRecords();
  }
  ngOnChanges(){    
  }
  ngOnInit() {
    this.config = {
      currentPage:1,
      itemsPerPage:4,
      totalItems: 0
    };

    this.addcompany = this.formBuilder.group({
      address : new FormControl(),
      email : new FormControl(),
      gstNo : new FormControl(),
      isActive : new FormControl(),
      phone : new FormControl(),
      title : new FormControl(),
      website : new FormControl(),
    });

    this.route.queryParams.subscribe(params => this.config.currentPage = params['page'] ? params['page'] : 1);
    this.createCompany={
        "address": "Bhaga",
        "email": "a@anuj.com",
        "gstNo": "16546153",
        "isActive": "yes",
        "phone": "89468498",
        "title": "THE ANUJ",
        "website": "aaa.com"
    };
  }

  getCompanyRecords() {
    this.companyService.getCompanyRecords().subscribe(data => {
      console.log("All company");
      console.log(data);
      this.companyResponse=data;
    })
  } 

  createNewCompany(){
    console.log(this.addcompany.value);
    this.companyService.createNewCompany(this.createCompany).subscribe(data => {
    this.getCompanyRecords();
    });
  }

  updateCompanyToDb(){
    this.companyService.updateCompanyToDb(this.currentUpdateCompany).subscribe(data => {
      this.getCompanyRecords();
      console.log(this.companyResponse);
    });  
  }

  viewRecord(company:CompanyResponseType){
    this.deleteRecordEnabled=false;
    this.currentCompanyResponse=company;
  }

   deleteRecord(company:CompanyResponseType){
    this.deleteRecordEnabled=true;
    this.currentCompanyResponse=company;
  }

}
