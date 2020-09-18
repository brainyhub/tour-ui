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
  public static companyReportUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/vvt/company";
  public static newCompanyUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/vvt/company";
  public static updateCompanyUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/vvt/company/update";
  public static deleteCompanyUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/vvt/company/";
  public static rolesUrl: string =
    ServiceConstants.appContext + "tour/adminService/allRoles";
  public static deleteRolesUrl: string =
    ServiceConstants.appContext + "tour/adminService/roles/delete";
  public static permissionUrl: string =
    ServiceConstants.appContext + "tour/adminService/permissions";
  public static updatePermissionUrl: string =
    ServiceConstants.appContext + "tour/adminService/permissions/update";
  public static deletePermissionUrl: string =
    ServiceConstants.appContext + "tour/adminService/permissions/delete";
  public static permissionAddUrl: string =
    ServiceConstants.appContext + "tour/adminService/rolesPermission";
  public static checknewuserUrl: string =
    ServiceConstants.appContext + "tour/adminService/user/validate/user";
  public static packageUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/company/packages";
  public static updatePackageUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/company/packages/update";
  public static deletePackageUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/company/department/delete";
  public static getInvoicesUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/invoice-service/invoice";
  public static newInvoicesUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/invoice-service/invoice";
  public static updateInvoicesUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/invoice-service/invoice/update";
  public static deleteInvoicesUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/invoice-service/invoice/delete";
  public static getRolesUrl: string =
    ServiceConstants.appContext + "tour/adminService/roles";
  public static checkIdUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/trip/";
  public static vehicleDriverAssignmentUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripAssignment";
  public static tripStartUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripStart";
  public static tripPanicUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripPanic";
  public static tripConfirmationUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripConfirmation";
  public static tripCompleteUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripComplete";
  public static tripBreakdownUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripBreakdown";
  public static tripCancelUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripCancel";
  public static tripPassangerChangeUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripPassangerChange";
  public static tripInfoChangeUrl: string =
    ServiceConstants.appContext + "tour/api/ver01/tripservice/tripChange";
  public static getUserUrl: string =
    ServiceConstants.appContext + "tour/adminService/users";
  public static assignRolesUrl: string =
    ServiceConstants.appContext + "tour/adminService/roles";
}
