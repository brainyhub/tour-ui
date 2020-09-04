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
}
