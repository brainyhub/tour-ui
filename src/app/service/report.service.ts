import { Injectable } from '@angular/core';
import {REPORTS} from './reports';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }
  getAllReports(userPermissions:string[]){
    let applicableMenus=[];
    for(var menu of REPORTS){
        var res=userPermissions.includes(menu.name);
        if(res){
          applicableMenus.push(menu);
        }
    }
    //console.log(applicableMenus);
    return applicableMenus;
  }
}
