import { CompanyService } from './../service/company.service';
import { CompanyResponseType } from './companyResponseType';
import { Component, OnInit, OnChanges } from '@angular/core';
import { CompanyReport } from './companyReportType';
import { CreateCompanyType } from './createCompanyType';
import { DeleteCompanyType } from './deleteCompanyType';
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
  createCompany:CreateCompanyType;
  companyResponse: CompanyResponseType[];
  config: any;
  updateCompany:UpdateCompanyType;
  deleteCompany:DeleteCompanyType;
  deleteRecordEnabled:Boolean=true;
  report: CompanyReport;
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
      currentPage:1,
      itemsPerPage:4,
      totalItems: 0
    }
    this.route.queryParams.subscribe(params => this.config.currentPage = params['page'] ? params['page'] : 1);
    this.createCompany={
      address: "",
      companyTaxs:[
        {
          displayTitle:"",
          percentOrAmout:"",
          value:"",
          vvtTaxType:{
            title:""
          }
        }
      ],
      email: "",
      gstNo: "",
      isActive: "",
      phone: "",
      title: "",
      website: "",

    }
    this.updateCompany={
      address: "",
      companyTaxs:[
        {
          displayTitle:"",
          percentOrAmout:"",
          value:"",
          vvtTaxType:{
            title:""
          }
        }
      ],
      email: "",
      gstNo: "",
      isActive: "",
      id:0,
      phone: "",
      title: "",
      website: ""
    } 
    this.deleteCompany={
      id:0
    }
  }
  pageChange(newPage: number) {
    this.router.navigate(["site/company"], { queryParams: { page: newPage } });
  }
  addNewTaxs(){
    this.createCompany.companyTaxs.push({
      displayTitle:"",
      percentOrAmout:"",
      value:"",
      vvtTaxType:{
        title: ""
      },
    });
  }
  addNewUpdateTaxs(){
    this.updateCompany.companyTaxs.push({
      displayTitle:"",
      percentOrAmout:"",
      value:"",
      vvtTaxType:{
        title: ""
      },
    });
  }
  deleteTaxs(tax : any){
    let count = 0;
    for( let taxs of this.createCompany.companyTaxs){
      if(taxs.displayTitle==tax.displayTitle){
        this.createCompany.companyTaxs.splice(count, 1);
        break;
      }
      count++;
    }
  }
  deleteUpdateTaxs(tax : any){
    let count = 0;
    for( let taxs of this.updateCompany.companyTaxs){
      if(taxs.displayTitle==tax.displayTitle){
        this.updateCompany.companyTaxs.splice(count, 1);
        break;
      }
      count++;
    }
  }
  modifyRecord(modifyRecord:UpdateCompanyType){
      this.updateCompany.address=modifyRecord.address;
      this.updateCompany.email=modifyRecord.email;
      this.updateCompany.gstNo=modifyRecord.gstNo;
      this.updateCompany.isActive=modifyRecord.isActive;
      this.updateCompany.phone=modifyRecord.phone;
      this.updateCompany.title=modifyRecord.title;
      this.updateCompany.website=modifyRecord.website;
      this.updateCompany.id=modifyRecord.id;
      this.deleteCompany.id=modifyRecord.id;
      let taxObj: any = [];
      for (let taxs of modifyRecord.companyTaxs){
        let tax={
          displayTitle:taxs.displayTitle,
          percentOrAmout:taxs.percentOrAmout,
          value:taxs.value,
          vvtTaxType:{title:taxs.vvtTaxType.title}
        }
        taxObj.push(tax);
      }
      this.updateCompany.companyTaxs=taxObj;
  }
  viewRecord(company: UpdateCompanyType) {
    this.deleteRecordEnabled = false;
    this.updateCompany = company;
  }
  deleteRecord(company: UpdateCompanyType) {
    this.deleteRecordEnabled = true;
    this.updateCompany = company;
    this.deleteCompany.id=company.id;
  }
  getCompanyRecords() {
    this.companyService.getCompanyRecords().subscribe(data => {
      console.log("All company");
      //console.log(data);
      this.companyResponse=data;
      console.log(this.companyResponse);
    })
  }
  createNew(){
    console.log(this.createCompany);
    this.companyService.createNewCompany(this.createCompany).subscribe((response)=>{
      console.log("success", response);
    },
    (error) => console.log("Error!", error)
    );
    this.getCompanyRecords();
  }
  updateCompanyRec(){
    this.companyService.updateCompanyToDb(this.updateCompany).subscribe((response)=>{
      console.log("success", response);
    },
    (error) => console.log("Error!", error)
    );
    this.getCompanyRecords();
  }
  deleteCompanyRec(){
    this.companyService.deleteCompanyToDb(this.deleteCompany).subscribe((response)=>{
    console.log("success", response);
  },
  (error) => console.log("Error!", error)
  );
  this.getCompanyRecords();
}
}
