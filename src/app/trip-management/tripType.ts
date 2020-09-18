export interface TripType{
    id: Number,
    reasonForChange: string,
    trip_booking_time: String,
     trip_company_department : 
    {
       dept_address : string,
       dept_gst : string,
       dept_title : string,
       id : Number
    },
     trip_company_info : 
    {
       address : string,
       companyTaxs : [
        {
           displayTitle : string,
           percentOrAmout : Number,
           value : number,
           vvtTaxType : {
             title : string
          }
        }
      ],
       email : string,
       gstNo : string,
       id : Number,
       isActive : string,
       phone : string,
       title : string,
       website : string
    },
     trip_driver_info : {
       id : Number,
       mobileNo1 : Number,
       mobileNo2 : Number,
       name : string
    },
     trip_drop_point : string,
     trip_drop_time : string,
     trip_invoice_info : [
      {
         bata : Number,
         closingKm : Number,
         extraHr : Number,
         extraHrCharges : Number,
         extraKm : Number,
         extraKmCharges : Number,
         fileAttachment : string,
         finalAmount : Number,
         id : Number,
         invoiceDate : Number,
         invoiceNumber : {
           invoiceDisplayNumber : string
        },
         openingKm : Number,
         parkingCharges : Number,
         slipNo : string,
         taxAmount : Number,
         tollCharges : Number,
         totalAmount : Number,
         totalKm : Number,
         waitingChanges : Number
      }
    ],
     trip_number : {
       tripDisplayNumber : string
    },
     trip_package_info : {
       extraHrRate : Number,
       extraKmRate : Number,
       id : Number,
       kmPerRate : Number,
       package_rate : Number,
       package_timing : string,
       package_title : string,
       package_type : {
         title : string
      }
    },
     trip_passanger_info : [
      {
         drop : string,
         drop_time : string,
         email : string,
         first_name : string,
         fullname : string,
         id : Number,
         last_name : string,
         phone : string,
         pickup : string,
         pickup_time : string
      }
    ],
     trip_pick_point : string,
     trip_pick_time : string,
     trip_rout : string,
     trip_status_info : {
       value : string
    },
     trip_vehicle_info : {
       id : Number,
       vehicleName : string,
       vehicleNo : string
    }
  }