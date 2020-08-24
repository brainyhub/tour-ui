import { Rider } from './rider';
export interface CreateTrip{
  "companyId": Number,
  "departmentId": Number,
  "driverId": Number,
  "firstPickTime": string,
  "firstPickUpPoint": string,
  "lastDroPoint": string,
  "packageId": Number,
  "riders": Rider[],
  "triptTitle":string,
  "vehicleId":Number
}