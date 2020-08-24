import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css'],
})
export class SearchTableComponent implements OnChanges,OnInit{
  config: any;
  @Input()
  records = [];
  @Input()
  headers: any[];
  @Input()
  struct:any; 
  vvtMap = new Map();
  ngOnInit(){
    console.log("ngOnInit");
    
  }
  addData:any;
  editData:any;
  readOnlyProp:Boolean=true;
  
  ngOnChanges(){
    console.log("ngOnChanges");
    console.log(this.struct);
    //this.config=this.struct.pagination_config;
    this.config = {
      currentPage: 1,
      itemsPerPage: 2,
      totalItems: 0
    };
    this.headers=this.struct.headers;
    this.records=this.struct.data;
     if(!this.struct.add){
      for(let column of this.struct.addColumns){
        if(column.type=='select'){
          this.getSelectOptions(column.id,column.source_api)
         
        }
      }
     }
    
  }
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) {
    this.addData=/*{
      "address": "string",
      "email": "string",
      "gstNo": "string",
      "id": 0,
      "isActive": "string",
      "phone": "string",
      "title": "string",
      "website": "string"
    };*/
    {
      "companyId": 0,
      "departmentId": 0,
      "driverId": 0,
      "firstPickTime": "2020-08-19T12:39:54.788Z",
      "firstPickUpPoint": "string",
      "lastDroPoint": "string",
      "packageId": 0,
      "riders": [],
      "triptTitle": "string",
      "vehicleId": 0
    };
    this.readOnlyProp=true;
    this.config = {
      currentPage: 1,
      itemsPerPage: 2,
      totalItems: 0
    };
    route.queryParams.subscribe(params => this.config.currentPage = params['page'] ? params['page'] : 1);
  }

  getSelectOptions(id:string,url:string) {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NjY1NjgyOCwiaWF0IjoxNTk2NjM4ODI4fQ.iq2kcl_kcaHgGHl1X5X6DO0d3x0NEgNCuixog3xVJhUzD3un2YhBGOdpLRjX50iqUV7lmU69JtaHlqoY9MC0Cw')
    }
    this.http.get<any>(url, header).subscribe(data => {
      this.vvtMap.set(id,data);
      })
  }  

  pageChange(newPage: number) {
    this.router.navigate(['/home'], { queryParams: { page: newPage } });
  }

  getValuetoDisplay(data: any) {
    var isArr = Array.isArray(data);
    var isObj = this.isObject(data)
    var headersCurr = Object.keys(data);
    var out = "N/A";
    if (!isArr && isObj) {
      out = eval("data." + headersCurr[0]);
    } else if (isArr && isObj) {
      if (data != undefined && data != null && data[0] != undefined && data[0] != null) {
        var newheaders = Object.keys(data[0]);
        out = eval("data[0]." + newheaders[0]);
      }
    }
    return out;
  }

  getHTMLTablePopup(data: any) {

    if (Object.keys(data).length > 0) {
      var isArr = Array.isArray(data);
      if (!isArr) {
        var headers = Object.keys(data);
        var html1 = "<div>";
        for (var i = 0; i < headers.length; i++) {
          var property = headers[i];
          var propertyValue = eval("data." + property);
          html1 = html1 + "<p><b>" + property.toUpperCase() + ": </b>" + propertyValue + "</p>";
        }
        html1 = html1 + "</div>";
        return html1;
      } else {
        var headers = Object.keys(data[0]);
        var html2 = "<div>";
        for (var i = 0; i < data.length; i++) {
          html2 = html2 + "<div>";
          for (var j = 0; j < headers.length; j++) {
            var property = headers[j];
            var propertyValue = eval("data[" + i + "]." + property);
            html2 = html2 + "<p><b> " + property.toUpperCase() + ": </b>" + propertyValue + "</p>";
          }
          html2 = html2 + "</div>";
        }
        return html2 = html2 + "</div>";
      }
    } else {
      return "EMPTY";
    }

  }

  isPopupRequired(key, data) {
    for (var i = 0; i < data.length; i++) {
      if (Array.isArray(eval("this.tableData[0]." + key))) {
        return true;
      }
    }
    return false;
  }

  isArray(obj: any) {
    return (Array.isArray(obj) && obj !== null) ? true : false;
  }

  isObject(obj: any) {
    return (typeof obj === 'object' && obj !== null) ? true : false;
  }
  populatetoDisplay(data: any) {
    if (data === null || data === undefined || data == "" || data == "null") {
      
      return "N/A";
    }
    return data;
  }
  delete(obj){
    let id=obj.id;
    console.log('hhhhhhhhhhhhhhhhhhhdeleet'+id);
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NjY1NjgyOCwiaWF0IjoxNTk2NjM4ODI4fQ.iq2kcl_kcaHgGHl1X5X6DO0d3x0NEgNCuixog3xVJhUzD3un2YhBGOdpLRjX50iqUV7lmU69JtaHlqoY9MC0Cw', 'My-Custom-Header': 'foobar' }
    //let options = new RequestOptions({ headers: headers });
    this.http.delete('http://localhost:8080/tour/api/ver01/vvt/company/'+id,{headers});

    console.log('hhhhhhhhhhhhhhhhhhhdeleetcomplete');


/*
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NjY1NjgyOCwiaWF0IjoxNTk2NjM4ODI4fQ.iq2kcl_kcaHgGHl1X5X6DO0d3x0NEgNCuixog3xVJhUzD3un2YhBGOdpLRjX50iqUV7lmU69JtaHlqoY9MC0Cw', 'My-Custom-Header': 'foobar' }
    
    this.http
      .delete('http://localhost:8080/tour/api/ver01/vvt/company/'+id, headers)
      .subscribe((s) => {
        console.log(s);
      });
*/


  }
  edit(objectVal){
    this.editData={
      "address": "string",
      "email": "string",
      "gstNo": "string",
      "id": 0,
      "isActive": "string",
      "phone": "string",
      "title": "string",
      "website": "string"
    };
    Object.assign(this.editData, objectVal);
  }
  editable(){
    if(this.readOnlyProp){
      this.readOnlyProp=false;
    }else{
      this.readOnlyProp=true;
    }
    
  }

  OnInput(event: any) {
     console.log(event.target.id+"---"+event.target.value) ;
    }
  submit(){
    console.log("this is submit") ;
    console.log(this.editData);
  }
  modify(){
    if(confirm("Press a button!")){
      console.log(this.editData);
      this.modifyRecordTODB(this.editData);
    }
    
  }
  addMore(objectVal){
    console.log("---addMore---addMore");
    console.log(objectVal);
    if(objectVal.columnId=="riders"){
      this.addData.riders.push(
        {
          "dropDateTime": "2020-08-19T12:39:54.788Z",
          "dropPoint": "string",
          "email": "string",
          "firstName": "string",
          "lastName": "string",
          "passType": 0,
          "phone": "string",
          "pickDateTime": "2020-08-19T12:39:54.788Z",
          "pickPoint": "string"
        }
      );
    }
  }
  addNewRecord(objectVal){
    this.addData=[];
    this.addData=/*{
      "address": "string",
      "email": "string",
      "gstNo": "string",
      "id": 0,
      "isActive": "string",
      "phone": "string",
      "title": "string",
      "website": "string"
    };*/
    {
      "companyId": 0,
      "departmentId": 0,
      "driverId": 0,
      "firstPickTime": "2020-08-19T12:39:54.788Z",
      "firstPickUpPoint": "string",
      "lastDroPoint": "string",
      "packageId": 0,
      "riders": [
        {
          "dropDateTime": "2020-08-19T12:39:54.788Z",
          "dropPoint": "string",
          "email": "string",
          "firstName": "string",
          "lastName": "string",
          "passType": 0,
          "phone": "string",
          "pickDateTime": "2020-08-19T12:39:54.788Z",
          "pickPoint": "string"
        }
      ],
      "triptTitle": "string",
      "vehicleId": 0
    };
  }
  saveNewRecord(){
    if(confirm("Press a button!")){
      console.log(this.addData);
      this.saveNewRecordTODB(this.addData);
    }
    
  }
  saveNewRecordTODB(inputJson) {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NjY1NjgyOCwiaWF0IjoxNTk2NjM4ODI4fQ.iq2kcl_kcaHgGHl1X5X6DO0d3x0NEgNCuixog3xVJhUzD3un2YhBGOdpLRjX50iqUV7lmU69JtaHlqoY9MC0Cw', 'My-Custom-Header': 'foobar' }
    this.http.post<any>('http://localhost:8080/tour/api/ver01/vvt/company', inputJson,{headers}).subscribe(data => {
      console.log(data);
      alert("done");
  })
  }  
  modifyRecordTODB(inputJson) {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NjY1NjgyOCwiaWF0IjoxNTk2NjM4ODI4fQ.iq2kcl_kcaHgGHl1X5X6DO0d3x0NEgNCuixog3xVJhUzD3un2YhBGOdpLRjX50iqUV7lmU69JtaHlqoY9MC0Cw', 'My-Custom-Header': 'foobar' }
   this.http.post<any>('http://localhost:8080/tour/api/ver01/vvt/company/update', inputJson,{headers}).subscribe(data => {
      console.log(data);
      alert("done");
  })

 // this.http.put('http://localhost:8080/tour/api/ver01/vvt/company', inputJson, { headers: { 'Content-Type': 'application/json' } });
  }  
}
