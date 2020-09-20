export class ServiceConstants {
  //public static appContext: string = "http://15.207.210.221:8080/tour/api/0.1";
  public static appContext: string = "http://localhost:8080/tour/api/0.1";
  public static loginUrl: string =
    ServiceConstants.appContext + "/auth-service/login";
  public static checknewuserUrl: string =
    ServiceConstants.appContext + "/auth-service/user/validate";
  public static registerUserUrl: string =
    ServiceConstants.appContext + "/admin-service/public/registerUser";
  public static forgotPasswordUrl: string =
    ServiceConstants.appContext + "/auth-service/forgotpassword";
  public static changePasswordUrl: string =
    ServiceConstants.appContext + "/auth-service/forgotpasswordprocess";




  public static tripReportUrl: string =
    ServiceConstants.appContext + "/tripservice/tripReports";
  public static newTripUrl: string =
    ServiceConstants.appContext + "/tripservice/trip";
  public static updateTripUrl: string =
    ServiceConstants.appContext + "/tripservice/trip";

  public static updateUserUrl: string =
    ServiceConstants.appContext + "tour/adminService/user";

  public static companyReportUrl: string =
    ServiceConstants.appContext + "/company-service/company";
  public static newCompanyUrl: string =
    ServiceConstants.appContext + "/company-service/company";
  public static updateCompanyUrl: string =
    ServiceConstants.appContext + "/company-service/company/update";
  public static deleteCompanyUrl: string =
    ServiceConstants.appContext + "/company-service/company/";
  public static rolesUrl: string =
    ServiceConstants.appContext + "/admin-service/allRoles";
  public static deleteRolesUrl: string =
    ServiceConstants.appContext + "/admin-service/roles/delete";
  public static permissionUrl: string =
    ServiceConstants.appContext + "/admin-service/permissions";
  public static updatePermissionUrl: string =
    ServiceConstants.appContext + "/admin-service/permissions/update";
  public static deletePermissionUrl: string =
    ServiceConstants.appContext + "/admin-service/permissions/delete";
  public static permissionAddUrl: string =
    ServiceConstants.appContext + "/admin-service/rolesPermission";
  public static packageUrl: string =
    ServiceConstants.appContext + "/company/packages";
  public static updatePackageUrl: string =
    ServiceConstants.appContext + "/company/packages/update";
  public static deletePackageUrl: string =
    ServiceConstants.appContext + "/company/department/delete";
  public static getInvoicesUrl: string =
    ServiceConstants.appContext + "/invoice-service/invoice";
  public static newInvoicesUrl: string =
    ServiceConstants.appContext + "/invoice-service/invoice";
  public static updateInvoicesUrl: string =
    ServiceConstants.appContext + "/invoice-service/invoice/update";
  public static deleteInvoicesUrl: string =
    ServiceConstants.appContext + "/invoice-service/invoice/delete";
  public static getRolesUrl: string =
    ServiceConstants.appContext + "/admin-service/roles";
  public static checkIdUrl: string =
    ServiceConstants.appContext + "/tripservice/trip/";
  public static vehicleDriverAssignmentUrl: string =
    ServiceConstants.appContext + "/tripservice/tripAssignment";
  public static tripStartUrl: string =
    ServiceConstants.appContext + "/tripservice/tripStart";
  public static tripPanicUrl: string =
    ServiceConstants.appContext + "/tripservice/tripPanic";
  public static tripConfirmationUrl: string =
    ServiceConstants.appContext + "/tripservice/tripConfirmation";
  public static tripCompleteUrl: string =
    ServiceConstants.appContext + "/tripservice/tripComplete";
  public static tripBreakdownUrl: string =
    ServiceConstants.appContext + "/tripservice/tripBreakdown";
  public static tripCancelUrl: string =
    ServiceConstants.appContext + "/tripservice/tripCancel";
  public static tripPassangerChangeUrl: string =
    ServiceConstants.appContext + "/tripservice/tripPassangerChange";
  public static tripInfoChangeUrl: string =
    ServiceConstants.appContext + "/tripservice/tripChange";
  public static getUserUrl: string =
    ServiceConstants.appContext + "/admin-service/users";
  public static assignRolesUrl: string =
    ServiceConstants.appContext + "/admin-service/roles";
}
