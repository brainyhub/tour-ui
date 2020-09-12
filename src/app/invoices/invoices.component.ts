import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { InvoiceType } from "./invoicesType";
import { NewInvoiceType } from "./newInvoicesType";
import { DeleteInvoiceType } from "./deleteInvoicesType";
import { UpdateInvoiceType } from "./updateInvoicesType";
import { InvoiceService } from "./../service/invoice.service";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoiceType: InvoiceType[];
  invoice: InvoiceType;
  newInvoiceType: NewInvoiceType;
  updateInvoice: UpdateInvoiceType;
  deleteInvoiceType: DeleteInvoiceType;
  config: any;
  dtOptions: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
  ) { this.getInvoiceRecords(); }

  ngOnInit() {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['print', 'excel', 'pdf']

    };
    this.getInvoiceRecords();
    this.config = {
      currentPage: 1,
      itemsPerPage: 4,
      totalItems: 0,
    };
    this.route.queryParams.subscribe(
      (params) =>
        (this.config.currentPage = params["page"] ? params["page"] : 1)
    );
    this.newInvoiceType = {
      tripId: 0,
      bata: 0,
      closingKm: 0,
      extraHr: 0,
      extraHrCharges: 0,
      extraKm: 0,
      extraKmCharges: 0,
      fileAttachment: "",
      finalAmount: 0,
      invoiceDate: "",
      openingKm: 0,
      parkingCharges: 0,
      taxAmount: 0,
      tollCharges: 0,
      totalAmount: 0,
      totalKm: 0,
      waitingChanges: 0,
    }
    this.updateInvoice = {
      id: 0,
      bata: 0,
      closingKm: 0,
      extraHr: 0,
      extraHrCharges: 0,
      extraKm: 0,
      extraKmCharges: 0,
      fileAttachment: "",
      finalAmount: 0,
      invoiceDate: "",
      openingKm: 0,
      parkingCharges: 0,
      taxAmount: 0,
      tollCharges: 0,
      totalAmount: 0,
      totalKm: 0,
      waitingChanges: 0,
    }
    this.deleteInvoiceType = {
      id: 0
    }
  }
  modifyRecord(modify: InvoiceType) {
    this.deleteInvoiceType.id = this.updateInvoice.id = modify.id;
    this.updateInvoice.bata = modify.bata;
    this.updateInvoice.closingKm = modify.closingKm;
    this.updateInvoice.extraHr = modify.extraHr;
    this.updateInvoice.extraHrCharges = modify.extraHrCharges;
    this.updateInvoice.extraKm = modify.extraKm;
    this.updateInvoice.extraKmCharges = modify.extraKmCharges;
    this.updateInvoice.fileAttachment = modify.fileAttachment;
    this.updateInvoice.finalAmount = modify.finalAmount;
    this.updateInvoice.invoiceDate = modify.invoiceDate;
    this.updateInvoice.openingKm = modify.openingKm;
    this.updateInvoice.parkingCharges = modify.parkingCharges;
    this.updateInvoice.taxAmount = modify.taxAmount;
    this.updateInvoice.tollCharges = modify.tollCharges;
    this.updateInvoice.totalAmount == modify.taxAmount;
    this.updateInvoice.totalKm = modify.totalKm;
    this.updateInvoice.waitingChanges = modify.waitingChanges;
  }

  pageChange(newPage: number) {
    this.router.navigate(["site/invoice"], { queryParams: { page: newPage } });
  }
  getInvoiceRecords() {
    this.invoiceService.getInvoiceRecords().subscribe((data) => {
      console.log(data);
      this.invoiceType = data;
    })
  }
  createNew() {
    console.log(this.newInvoiceType);
    this.invoiceService.createNewInvoices(this.newInvoiceType).subscribe((response) => {
      console.log("success", response);

    },
      (error) => console.log("Error!", error)
    );
    this.getInvoiceRecords();
  }
  update() {
    this.invoiceService.updateInvoice(this.updateInvoice).subscribe((response) => {
      console.log("success", response);
    },
      (error) => console.log("Error!", error)
    );
    this.getInvoiceRecords();
  }
  deleteInvoice() {
    this.invoiceService.deleteInvoice(this.deleteInvoiceType).subscribe((response) => {
      console.log("success", response);
    },
      (error) => console.log("Error!", error)
    );
    this.getInvoiceRecords();
  }
}
