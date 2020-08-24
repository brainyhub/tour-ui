export const TRIPSTRUCT:any={
  "table": "trip",
  "table_label": "Trip",
  "editable": true,
  "delete": true,
  "row_export": true,
  "export": true,
  "search": true,
  "add": true,
  "addScreenSize": "xl",
  "addHorizontalPos": true,
  "addColumns":[
    {
      "columnTitle": "triptTitle",
      "columnId": "triptTitle",
      "type": "java.lang.String",
      "child": [],
      "source_api": "",
      "minLength": "0",
      "maxMalength": "100",
      "required": false
    },
    {
      "columnTitle": "firstPickUpPoint",
      "columnId": "firstPickUpPoint",
      "type": "java.lang.String",
      "child": [],
      "source_api": "",
      "minLength": "0",
      "maxMalength": "100",
      "required": false
    },
    {
      "columnTitle": "lastDroPoint",
      "columnId": "lastDroPoint",
      "type": "java.lang.String",
      "child": [],
      "source_api": "",
      "minLength": "0",
      "maxMalength": "100",
      "required": false
    },
    {
      "columnTitle": "firstPickTime",
      "columnId": "firstPickTime",
      "type": "java.time.LocalDateTime",
      "child": [],
      "source_api": "",
      "minLength": "0",
      "maxMalength": "100",
      "required": false
    },
    {
      "columnTitle": "companyId",
      "columnId": "companyId",
      "type": "int",
      "child": [],
      "source_api": "",
      "minLength": "0",
      "maxMalength": "100",
      "required": false
    },
    {
      "columnTitle": "departmentId",
      "columnId": "departmentId",
      "type": "int",
      "child": [],
      "source_api": "",
      "minLength": "0",
      "maxMalength": "100",
      "required": false
    },
    {
      "columnTitle": "driverId",
      "columnId": "driverId",
      "type": "int",
      "child": [],
      "source_api": "",
      "minLength": "0",
      "maxMalength": "100",
      "required": false
    },
    {
      "columnTitle": "vehicleId",
      "columnId": "vehicleId",
      "type": "int",
      "child": [],
      "source_api": "",
      "minLength": "0",
      "maxMalength": "100",
      "required": false
    },
    {
      "columnTitle": "packageId",
      "columnId": "packageId",
      "type": "int",
      "child": [],
      "source_api": "",
      "minLength": "0",
      "maxMalength": "100",
      "required": false
    },
    {
      "columnTitle": "riders",
      "columnId": "riders",
      "type": " java.util.List  ",
       "child": [
        {
          "columnTitle": "dropDateTime",
          "columnId": "dropDateTime",
          "type": "java.lang.String",
          "source_api": "",
          "minLength": "0",
          "maxMalength": "100",
          "required": false
        },
        {
          "columnTitle": "dropPoint",
          "columnId": "dropPoint",
          "type": "java.lang.String",
          "source_api": "",
          "minLength": "0",
          "maxMalength": "100",
          "required": false
        },
        {
          "columnTitle": "email",
          "columnId": "email",
          "type": "java.lang.String",
          "source_api": "",
          "minLength": "0",
          "maxMalength": "100",
          "required": false
        },
        {
          "columnTitle": "firstName",
          "columnId": "firstName",
          "type": "java.time.LocalDateTime",
          "source_api": "",
          "minLength": "0",
          "maxMalength": "100",
          "required": false
        },
        {
          "columnTitle": "lastName",
          "columnId": "lastName",
          "type": "int",
          "source_api": "",
          "minLength": "0",
          "maxMalength": "100",
          "required": false
        },
        {
          "columnTitle": "passType",
          "columnId": "passType",
          "type": "int",
          "source_api": "",
          "minLength": "0",
          "maxMalength": "100",
          "required": false
        },
        {
          "columnTitle": "phone",
          "columnId": "phone",
          "type": "int",
          "source_api": "",
          "minLength": "0",
          "maxMalength": "100",
          "required": false
        },
        {
          "columnTitle": "pickDateTime",
          "columnId": "pickDateTime",
          "type": "int",
          "source_api": "",
          "minLength": "0",
          "maxMalength": "100",
          "required": false
        },
        {
          "columnTitle": "pickPoint",
          "columnId": "pickPoint",
          "type": "int",
          "source_api": "",
          "minLength": "0",
          "maxMalength": "100",
          "required": false
        }
      ]
    }
  ]
   
}