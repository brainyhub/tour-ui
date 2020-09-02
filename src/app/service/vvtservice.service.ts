import { Injectable } from "@angular/core";
import { VVTCompany } from "./tables/VVTCompany";
import { VVT } from "./tables/VVT";
@Injectable({
  providedIn: "root",
})
export class VVTServiceService {
  public COMPANIES: VVT[] = VVTCompany;
  constructor() {}
}
