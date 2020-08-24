import { Pipe, PipeTransform } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Pipe({
  name: 'customerEmailFilter'
})
export class SearchPipe implements PipeTransform {
  result:any[];
  
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((value) => {
      //console.log(value);
      var map=[""]; 
      for (var p in value){
        
        var lvl1_entity= value[p];
        //console.log(lvl1_entity);
        for(var lvl1_prop in lvl1_entity){
          var Lvl1_value= lvl1_entity[lvl1_prop];
          
          this.addPropertyValue(lvl1_prop,Lvl1_value,map);
      
        }
        /*//console.log("checking:"+args+"--");
        //console.log(map);
        */
        var flg=map.some(substring=>args.includes(substring));
        //console.log(flg);
        //console.log(map);
       /* if(flg&&map.length>1){
          return value;
        }*/
        
      }   
      //console.log("---");
      return value;
    })

  }



  addPropertyValue(name:any,value:any,map:any){
    //console.log("addPropertyValue"+this.objectType(value));
    //console.log(map);
    
    if("Object"==this.objectType(value)){
      var nameArr=Object.keys(value);
      for(var i=0;i<nameArr.length;i++){
        var prop=nameArr[i];
        var data=value[prop];
        this.addPropertyValue(prop,data,map);
      }
    }
    else if("Array"==this.objectType(value)){
      for(var j in value){
        var subEntryValue=value[j];
        this.addPropertyValue(j,subEntryValue,map);
      }
      
    }else{
      if(value!=null && value!="" && value!=" "&& value!=undefined&&(!this.isBlank(value))&&(!this.isEmpty(value))){
        //console.log("--"+value);
        map.push(value);
        
      }
      
    }

  }
isEmpty(str) {
    return (!str || 0 === str.length);
}
isBlank(str) {
  return (!str || /^\s*$/.test(str));
}
  objectType(object) {
    
    if (object === null) {
        return "null";
    }
    else if (object === undefined) {
        return "undefined";
    }
    else if (object.constructor === Number) {
      return "Number";
    }
    else if (object.constructor === Boolean) {
      return "boolean";
    }
    else if (object.constructor === String) {
        return "String";
    }
    if (object.constructor === Array) {
        return "Array";
    }
    if (object.constructor === Object) {
        return "Object";
    }
    {
        return "don't know";
    }
}




 }