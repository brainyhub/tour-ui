export interface CompanyResponseType {
  "id": string
  "address": string,
  "email": string,
  "gstNo": string,
  "isActive": string,
  "phone": string,
  "title": string,
  "website": string

}

/*
"id": Number,
  "trip_number": {
    "tripDisplayNumber": string
  },
  "trip_rout": string,
  "trip_status_info": {
    "value": string
  },
  "trip_booking_time": string,
  "trip_pick_point": string,
  "trip_pick_time": string,
  "trip_drop_point": string,
  "trip_drop_time": string,
  "trip_package_info": {
    "id": Number,
    "package_title": string,
    "package_type": {
      "title": string
    },
    "package_timing": string,
    "package_rate": Number,
    "extraHrRate": Number,
    "extraKmRate": Number,
    "kmPerRate": Number
  },
  "trip_passanger_info": [
    {
      "id": Number,
      "fullname": string,
      "first_name": string,
      "last_name": string,
      "phone": string,
      "email": string,
      "pickup": string,
      "pickup_time": string,
      "drop": string,
      "drop_time": string
    }
  ],
  "trip_driver_info": {
    "id": Number,
    "name": string,
    "mobileNo1": string,
    "mobileNo2": string
  },
  "trip_vehicle_info": {
    "id": Number,
    "vehicleName": string,
    "vehicleNo": string
  },
  "trip_company_info": {
    "title": string,
    "address": string,
    "email": string,
    "phone": string,
    "website": string,
    "id": Number,
    "gstNo": string,
    "isActive": string
  },
  "trip_company_department": {
    "id": Number,
    "dept_title": string,
    "dept_address": string,
    "dept_gst": string
  },
  "trip_invoice_info": any[],
  "reasonForChange":string
}

*/