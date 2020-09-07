import { InvoicesComponent } from './invoices/invoices.component';
import { NotificationComponent } from "./notification/notification.component";
import { StatusComponent } from "./status/status.component";
import { TaxComponent } from "./tax/tax.component";
import { PackageComponent } from "./package/package.component";
import { CompanyComponent } from "./company/company.component";
import { ClientComponent } from "./client/client.component";
import { SuperAdminComponent } from "./super-admin/super-admin.component";
import { AssignRoleComponent } from "./assign-role/assign-role.component";
import { PermisionComponent } from "./permision/permision.component";
import { RoleComponent } from "./role/role.component";
import { SiteComponent } from "./layout/site/site.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { VvtablesComponent } from "./vvtables/vvtables.component";
import { LoginComponent } from "./login/login.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { TripComponent } from "./trip/trip.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { AppComponent } from "./app.component";
import { BookingComponent } from "./booking/booking.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssignPermissionComponent } from "./assign-permission/assign-permission.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  //Site routes goes here
  {
    path: "site",
    component: SiteComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "role", component: RoleComponent },
      { path: "invoice", component: InvoicesComponent },
      { path: "permissions", component: PermisionComponent },
      { path: "assign-role", component: AssignRoleComponent },
      { path: "assign-permission", component: AssignPermissionComponent },
      { path: "users", component: UsersComponent },
      { path: "superadmin", component: SuperAdminComponent },
      { path: "trip", component: TripComponent },
      { path: "client", component: ClientComponent },
      { path: "company", component: CompanyComponent },
      { path: "package", component: PackageComponent },
      { path: "tax", component: TaxComponent },
      { path: "status", component: StatusComponent },
      { path: "notifications", component: NotificationComponent },
      { path: "userprofile", component: UserProfileComponent },
      { path: "booking", component: BookingComponent },
    ],
  },

  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "registerUser", component: RegisterUserComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  { path: "changePassword", component: ChangePasswordComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
