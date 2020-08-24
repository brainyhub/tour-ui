import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {TRIPS} from '../search-table/trip';
//import {CountryService} from './country.service';


@Component({
  selector: 'search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent {
  searchTableHeaders: any;
  searchTableData: any;
  total$: Observable<number>;
  searchTableHtmlStr:any;
  
  constructor() {
    this.searchTableData = TRIPS;
    this.searchTableHeaders = Object.keys(TRIPS[0]);
    this.searchTableHtmlStr=this.preparePrimaryTable(this.searchTableData,this.searchTableHeaders,true);
   /* 
    var exclusion = [];
    exclusion.push("ceratedOn");
    exclusion.push("modifyOn");
    exclusion.push("id");

    var nodes = Object.keys(this.tableData[0]);
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (this.findInArray(node, exclusion)) {
        eval("delete this.tableData[0]." + node);
      }
    }

    for (let rowData in this.tableData) {
      this.htmlStr = this.htmlStr + "<tr>";
      for (let propertyName in this.tableHeaders) {
        var localPropName = this.tableHeaders[propertyName];
        var propertyValue = eval("this.tableData[rowData]." + localPropName);
        var isArrayJsonAsVal = Array.isArray(eval("this.tableData[rowData]." + localPropName));
        var isObjectAsValue = (typeof (eval("this.tableData[rowData]." + localPropName)) === 'object' && (eval("this.tableData[rowData]." + localPropName)) !== null) ? true : false;
        if (isObjectAsValue) {
          var popup = '<a href="#">Click</a>';
          this.htmlStr = this.htmlStr + "<td> " + this.getHTMLTablePopup(propertyValue) + "</td>";
        } else {
          this.htmlStr = this.htmlStr + "<td> " + propertyValue + "</td>";
        }

      }
      this.htmlStr = this.htmlStr + "</tr>";
    }*/
  }

preparePrimaryTable(tableData:any,tableHeaders:any,isEdit:Boolean){
  var htmlStr="";
  var exclusion = [];
 /* exclusion.push("ceratedOn");
  exclusion.push("modifyOn");
  exclusion.push("id");
  exclusion.push("tripPassangers");
  exclusion.push("tripInvoices");
  exclusion.push("vehicle");
  exclusion.push("companyPackage");
  exclusion.push("driver");
  exclusion.push("company");
  exclusion.push("companyDepartment");
  exclusion.push("notifications");
  exclusion.push("tripStatus");*/
  
  this.searchTableHeaders= this.searchTableHeaders.filter((item) => !exclusion.includes(item));

  var nodes = Object.keys(tableData[0]);
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (this.findInArray(node, exclusion)) {
      eval("delete tableData[0]." + node);
    }
  }
/*
  for (let rowData in tableData) {
    htmlStr = htmlStr + "<tr>";
    for (let propertyName in tableHeaders) {
      var localPropName = tableHeaders[propertyName];
      var propertyValue = eval("tableData[rowData]." + localPropName);
      var isArrayJsonAsVal = Array.isArray(eval("tableData[rowData]." + localPropName));
      var isObjectAsValue = (typeof (eval("tableData[rowData]." + localPropName)) === 'object' && (eval("tableData[rowData]." + localPropName)) !== null) ? true : false;
      if (isObjectAsValue) {
        var popup = "<a href='#' (data-toggle)='tooltip' title='Hooray!'>click</a><div class=\"popup\" >  <span class=\"popuptext\" id=\"myPopup\">A Simple Popup!</span>\n</div>";
        htmlStr = htmlStr + "<td>"+this.getHTMLTablePopup(propertyValue)+"</td>";
      } else {
          htmlStr = htmlStr + "<td> <label> " + propertyValue + "</label></td>"
      }
    }
    htmlStr = htmlStr + "</tr>";
  }*/ 
  return htmlStr; 
}

  getHTMLTablePopup(data:any){

    if(Object.keys(data).length>0){
      var isArr=Array.isArray(data);
      if(!isArr){
        var headers=Object.keys(data);
        var html1="<div>";
        for(var i=0;i<headers.length;i++){
          var property=headers[i];
          var propertyValue=eval("data."+property);
         // html1=html1+"<p><b> "+property+":</b>"+propertyValue+"</p>";
         html1=html1+"<p title='"+property+"'>"+propertyValue+"</p>";
        }
        html1=html1+"</div>";
        return html1;
      }else{
        //console.log(isArr+"*******************start");
        var headers=Object.keys(data[0]);
        var html2="<div>";
        for(var i=0;i<data.length;i++){
          html2=html2+"<div>";
          ////console.log(data[i]);
          for(var j=0;j<headers.length;j++){
            var property=headers[j];
            var propertyValue=eval("data["+i+"]."+property);
            //html2=html2+"<p><b> "+property+":</b>"+propertyValue+"</p>";
            html2=html2+"<p title='"+property+"'>"+propertyValue+"</p>";
          }
          html2=html2+"</div>";
        }
        //console.log("ENd*******************"+headers.length);
        return html2=html2+"</div>";
      }
    }else{
      return "EMPTY";
    }
   
  }

  isPopupRequired(key,data){
    for(var i=0;i< data.length;i++){
      if(Array.isArray(eval("this.tableData[0]."+key))){
        return true;
      }	
    }
    return false;
  }

   findInArray(key,data){
    for(var i=0;i< data.length;i++){
      if(key===data[i] ){
        ////console.log(key+"true<<"+data[i]);
        return true;
      }	
    }
    return false;
  }
}
