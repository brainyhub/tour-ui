export class ServiceConstants {
  public static appContext: string = "http://15.207.210.221:8080/";
  //public static appContext: string = "http://localhost:8080/";
  public static loginUrl: string =
    ServiceConstants.appContext + "tour/adminService/login";
  public static tripReportUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripReports";
  public static newTripUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/trip";
  public static updateTripUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/trip";
  public static registerUserUrl: string =
    ServiceConstants.appContext + "tour/adminService/public/registerUser";
    public static updateUserUrl: string =
    ServiceConstants.appContext + "tour/adminService/user";
    public static forgotPasswordUrl: string =
    ServiceConstants.appContext + "tour/adminService/forgotpassword";
    public static changePasswordUrl: string =
    ServiceConstants.appContext + "tour/adminService/forgotpasswordprocess";
}
