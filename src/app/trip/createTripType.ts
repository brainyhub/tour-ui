export interface CreateTripType{
    "companyId": Number,
    "departmentId": Number,
    "driverId": Number,
    "firstPickTime": string,
    "firstPickUpPoint": string,
    "lastDroPoint": string,
    "packageId": Number,
    "riders": [
      {
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
    "triptTitle": string,
    "vehicleId": Number
  }