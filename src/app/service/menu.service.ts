import { Injectable } from '@angular/core';
import { VALIDMENUS } from './menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  urlMenus:string="";
  userName:" ";
  constructor() { }
  public getApplicaleMenus() {
    let user:any=JSON.parse(sessionStorage.getItem("user-info"));
    if(user==undefined){
      return [];
    }
    let permissions:any[]=user.permissions;
    let menus:any[]=[];
    for(let menu of VALIDMENUS){
      if(permissions.includes(menu.permission)){
        menus.push(menu);
      }
    }
    return menus;
  }  

}
