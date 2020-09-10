import { ServiceConstants } from "./service.constants";
import { InvoiceType } from "../invoices/invoicesType";
import { NewInvoiceType } from "../invoices/newInvoicesType";
import { UpdateInvoiceType } from "../invoices/updateInvoicesType";
import { DeleteInvoiceType } from "../invoices/deleteInvoicesType";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InvoiceService {
  constructor(private http: HttpClient) {}

  public getInvoiceRecords(): Observable<any> {
    var header = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")
      ),
    };
    return this.http.get<any>(ServiceConstants.getInvoicesUrl, header);
  }
  public createNewInvoices(newInvoice: NewInvoiceType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.newInvoicesUrl, newInvoice, {
      headers,
    });
  }
  public updateInvoice(updateInvoice: UpdateInvoiceType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.updateInvoicesUrl, updateInvoice,{ headers }
    );
  }
  public deleteInvoice(deleteinvoice: DeleteInvoiceType): Observable<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http.post<any>(ServiceConstants.deleteInvoicesUrl, deleteinvoice,{ headers }
    );
  }
}
