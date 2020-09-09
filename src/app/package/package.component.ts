import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PackageType } from "./packageType";
import { PackageEditType } from "./packageEditType";
import { PackageService } from "./../service/package.service";
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packagetype:PackageType;
  modifypackage:PackageEditType;
  allpackage:PackageType[];
  config: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private packageService:PackageService
  ) { this.getpackageRecords();}

  ngOnInit() {
    this.config = {
      currentPage: 1,
      itemsPerPage: 4,
      totalItems: 0,
    };
    this.route.queryParams.subscribe(
      (params) =>
        (this.config.currentPage = params["page"] ? params["page"] : 1)
    );
    
    this.modifypackage = {
      packageId: 0,
      packageType: 0,
	    packageFor: 0,
      packageTitle: "",
      vehicleType: 0,
      packageTimeing: "",
      companyId: 0,
      extraHrRate: 0,
      kmPerRate: 0,
      extraKmRate: 0,
      rate: 0,
      packageSpecific:0
    }
    
  }
  modifyRecord( modify :PackageType){
    console.log(modify);
    this.modifypackage.packageId=modify.id;
    this.modifypackage.packageType=modify.packageType;
    this.modifypackage.packageFor=modify.packageFor;
    this.modifypackage.packageTitle=modify.packageTitle;
    this.modifypackage.vehicleType=modify.vehicleType;
    this.modifypackage.packageTimeing=modify.packageTimeing;
    this.modifypackage.companyId=modify.companyId;
    this.modifypackage.extraHrRate=modify.extraHrRate;
    this.modifypackage.kmPerRate=modify.kmPerRate;
    this.modifypackage.extraKmRate=modify.extraKmRate;
    this.modifypackage.rate=modify.rate;
    this.modifypackage.packageSpecific=modify.packageType;
  }
  pageChange(newPage: number) {
    this.router.navigate(["site/package"], { queryParams: { page: newPage } });
  }
  createNew() {
    this.packageService.createNewPackage(this.modifypackage).subscribe((response) => 
    {
      console.log("success", response);

    },
    (error) => console.log("Error!", error)
    );
    this.getpackageRecords();
  }
  getpackageRecords(){
    this.packageService.getPackageRecords().subscribe((data) => {
      console.log(data);
      this.allpackage=data;
    })
    
  }
  updatePackageToDb(){
    this.packageService.updatePackageToDb(this.modifypackage).subscribe((response)=>{
      console.log("success", response);
    },
    (error) => console.log("Error!", error)
    );
    this.getpackageRecords();
  }
}