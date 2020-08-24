export interface UpdateTripType{
    "companyChangeRequired": Boolean,
    "companyId": Number,
    "departmentChangeRequired": Boolean,
    "departmentId": Number,
    "driverChangeRequired": Boolean,
    "driverId": Number,
    "firstPickTime": string,
    "firstPickUpPoint": string,
    "lastDroPoint": string,
    "packageChangeRequired": Boolean,
    "packageId": Number,
    "reasonForChange": string,
    "riderChangeRequired": Boolean,
    "riders": [
      {
        "id": Number,
        "dropDateTime": string,
        "dropPoint": string,
        "email": string,
        "firstName": string,
        "lastName": string,
        "passType": Number,
        "phone": string,
        "pickDateTime": string,
        "pickPoint": string
      }
    ],
    "status": Number,
    "statusChangeRequired": Boolean,
    "tripId": Number,
    "tripInfoChangeRequired": Boolean,
    "triptTitle": string,
    "vehicleChangeRequired": Boolean,
    "vehicleId": Number
  }