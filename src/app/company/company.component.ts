import { CompanyService } from './../service/company.service';
import { CompanyResponseType } from './companyResponseType';
import { Component, OnInit, OnChanges } from '@angular/core';
import { CompanyReport } from './companyReportType';
import { CreateCompanyType } from './createCompanyType';
import { UpdateCompanyType } from './updateCompanyType';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  report: CompanyReport;
  createCompany: CreateCompanyType;
  updateCompany: UpdateCompanyType;
  companyResponse: CompanyResponseType[];
  config: any;
  currentCreateCompany: CreateCompanyType;
  currentUpdateCompany: UpdateCompanyType;
  currentCompanyResponse: CompanyResponseType;
  deleteRecordEnabled: Boolean = true;
  isDebugMode = false;
  isLogin: Boolean = false;
  dtOptions: any = {};

  addcompany: FormGroup;


  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private companyService: CompanyService, private route: ActivatedRoute) {
    console.log("constructor CompanyComponent");
    this.getCompanyRecords();
  }
  ngOnChanges() {
    this.getCompanyRecords();
  }
  ngOnInit() {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['print', 'excel', 'pdf']

    };
    this.getCompanyRecords();
    this.config = {
      currentPage: 1,
      itemsPerPage: 4,
      totalItems: 0
    };



    this.route.queryParams.subscribe(params => this.config.currentPage = params['page'] ? params['page'] : 1);
    this.createCompany = {
      address: "",
      email: "",
      gstNo: "",
      isActive: "",
      phone: "",
      title: "",
      website: ""
    };
  }

  getCompanyRecords() {
    this.companyService.getCompanyRecords().subscribe(data => {
      console.log("All company");
      console.log(data);
      this.companyResponse = data;
    })
  }


  modifyRecord(company: CompanyResponseType) {
    console.log("modifyRecord");
    console.log(company);
    this.currentUpdateCompany.address = company.address;
    this.currentUpdateCompany.email = company.email;
    this.currentUpdateCompany.gstNo = company.gstNo;
    this.currentUpdateCompany.isActive = company.isActive;
    this.currentUpdateCompany.phone = company.phone;
    this.currentUpdateCompany.title = company.title;
    this.currentUpdateCompany.website = company.website;
  }


  createNewCompany() {
    console.log(this.addcompany.value);
    this.companyService.createNewCompany(this.createCompany).subscribe(data => {
      this.getCompanyRecords();
    });
  }

  updateCompanyToDb() {
    this.companyService.updateCompanyToDb(this.currentUpdateCompany).subscribe(data => {
      this.getCompanyRecords();
      console.log(this.companyResponse);
    });
  }

  viewRecord(company: CompanyResponseType) {
    this.deleteRecordEnabled = false;
    this.currentCompanyResponse = company;
  }

  deleteRecord(company: CompanyResponseType) {
    this.deleteRecordEnabled = true;
    this.currentCompanyResponse = company;
  }

}
