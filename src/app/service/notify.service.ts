import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class NotifyService {
  constructor(private toastrService: ToastrService) {}
  public successMsg(text: string, heading: string) {
    this.toastrService.success(text, heading);
  }
  public informationMsg(text: string, heading: string) {
    this.toastrService.info(text, heading);
  }
  public warningMsg(text: string, heading: string) {
    this.toastrService.warning(text, heading);
  }
  public errorMsg(text: string, heading: string) {
    this.toastrService.error(text, heading);
  }
}
