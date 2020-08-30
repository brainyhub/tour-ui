import { MenuItemType } from './menuItemsType';
import { MenuService } from '../service/menu.service';
import { Component, OnInit, OnChanges } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnChanges{

  applicableMenus = [];
  applicableReports = [];
  constructor(private menuService: MenuService) {
    this.applicableMenus = JSON.parse(sessionStorage.getItem("menu-data"));
  }
  ngOnInit(){
    this.applicableMenus = JSON.parse(sessionStorage.getItem("menu-data"));
  }
  ngOnChanges(){
    this.applicableMenus = JSON.parse(sessionStorage.getItem("menu-data"));
  }
  getMenuStyle(menu:any){
    console.log(menu);
    console.log(menu.submenu);
    if(menu.submenu!=undefined && menu.submenu.length>0){
      console.log("-true");
      return "dropdown-toggle";
    }
    console.log("-false");
    console.log("---------------------------");
    
    return "";
  }
}
