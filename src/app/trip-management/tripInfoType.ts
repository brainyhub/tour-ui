export interface TripInfoType{
   companyId: Number,
   departmentId: Number,
   firstPickTime: String,
   firstPickUpPoint: String,
   lastDroPoint: String,
   packageId: Number,
   riders: [
     {
       dropDateTime: String,
       dropPoint: String,
       email: String,
       firstName: String,
       lastName: String,
       passType: Number,
       phone: String,
       pickDateTime: String,
       pickPoint: String
     }
   ],
   tripId: Number,
   triptTitle: String
 }