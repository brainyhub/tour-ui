import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PackageType } from "./packageType";
import { PackageEditType } from "./packageEditType";
import { PackageService } from "./../service/package.service";
import { deletePackageType } from './deletePackageType';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packagetype: PackageType;
  modifypackage: PackageEditType;
  deletepackage: PackageType;
  deleteType: deletePackageType;
  allpackage: PackageType[];
  config: any;
  dtOptions: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private packageService: PackageService
  ) { this.getpackageRecords(); }

  ngOnInit() {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['print', 'excel', 'pdf']

    };
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
      packageSpecific: 0
    }
    this.deletepackage = {
      id: 0,
      packageType: 0,
      packageTypeDesc: "",
      packageFor: 0,
      packageForDesc: "",
      packageTitle: "",
      vehicleType: 0,
      vehicleTypeDesc: "",
      packageTimeing: "",
      companyId: 0,
      companyDesc: "",
      extraHrRate: 0,
      kmPerRate: 0,
      extraKmRate: 0,
      rate: 0
    }
    this.deleteType = { id: 0 };
  }
  modifyRecord(modify: PackageType) {
    console.log(modify);
    this.modifypackage.packageId = modify.id;
    this.modifypackage.packageType = modify.packageType;
    this.modifypackage.packageFor = modify.packageFor;
    this.modifypackage.packageTitle = modify.packageTitle;
    this.modifypackage.vehicleType = modify.vehicleType;
    this.modifypackage.packageTimeing = modify.packageTimeing;
    this.modifypackage.companyId = modify.companyId;
    this.modifypackage.extraHrRate = modify.extraHrRate;
    this.modifypackage.kmPerRate = modify.kmPerRate;
    this.modifypackage.extraKmRate = modify.extraKmRate;
    this.modifypackage.rate = modify.rate;
    this.modifypackage.packageSpecific = modify.packageType;
  }
  deleteRecord(recodrs: PackageType) {
    this.deleteType.id = this.deletepackage.id = recodrs.id;
    this.deletepackage.packageType = recodrs.packageType;
    this.deletepackage.packageTypeDesc = recodrs.packageForDesc;
    this.deletepackage.packageFor = recodrs.packageFor;
    this.deletepackage.packageForDesc = recodrs.packageForDesc;
    this.deletepackage.packageTitle = recodrs.packageTitle
    this.deletepackage.vehicleType = recodrs.vehicleType;
    this.deletepackage.vehicleTypeDesc = recodrs.vehicleTypeDesc;
    this.deletepackage.packageTimeing = recodrs.packageTimeing;
    this.deletepackage.companyId = recodrs.companyId;
    this.deletepackage.companyDesc = recodrs.companyDesc;
    this.deletepackage.extraHrRate = recodrs.extraHrRate;
    this.deletepackage.kmPerRate = recodrs.kmPerRate;
    this.deletepackage.extraKmRate = recodrs.extraKmRate;
    this.deletepackage.rate = recodrs.rate;
  }
  pageChange(newPage: number) {
    this.router.navigate(["site/package"], { queryParams: { page: newPage } });
  }
  createNew() {
    this.packageService.createNewPackage(this.modifypackage).subscribe((response) => {
      console.log("success", response);

    },
      (error) => console.log("Error!", error)
    );
    this.getpackageRecords();
  }
  getpackageRecords() {
    this.packageService.getPackageRecords().subscribe((data) => {
      console.log(data);
      this.allpackage = data;
    })

  }
  updatePackageToDb() {
    this.packageService.updatePackageToDb(this.modifypackage).subscribe((response) => {
      console.log("success", response);
    },
      (error) => console.log("Error!", error)
    );
    this.getpackageRecords();
  }
  deletePackageToDb() {
    this.packageService.deletePackage(this.deleteType).subscribe((response) => {
      console.log("success", response);
    },
      (error) => {
        console.log("Error", error);
      });
    this.getpackageRecords();
  }
}