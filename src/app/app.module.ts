import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '../app/homepage/HomeRoutingModule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BookingComponent } from './booking/booking.component';
import { CounterWidgetComponent } from './counter-widget/counter-widget.component';
import { ProgressWidgetComponent } from './progress-widget/progress-widget.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchComponent } from './search/search.component';
import { EventBoardComponent } from './event-board/event-board.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { SearchPipe } from './search-table/SearchPipe';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TripComponent } from './trip/trip.component';
import { VvtablesComponent } from './vvtables/vvtables.component';
import { AuditComponent } from './audit/audit.component';
import { ClientComponent } from './client/client.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDepartmentComponent } from './company-department/company-department.component';
import { PackageComponent } from './package/package.component';
import { JwtutilComponent } from './jwtutil/jwtutil.component';
import { LoginHistoryComponent } from './login-history/login-history.component';
import { NotificationTemplateComponent } from './notification-template/notification-template.component';
import { NotificationComponent } from './notification/notification.component';
import { PermisionComponent } from './permision/permision.component';
import { RoleComponent } from './role/role.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SiteComponent } from './layout/site/site.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignRoleComponent } from './assign-role/assign-role.component';
import { AssignPermissionComponent } from './assign-permission/assign-permission.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { TaxComponent } from './tax/tax.component';
import { StatusComponent } from './status/status.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterUserComponent,
    ForgotPasswordComponent,
    BookingComponent,
    CounterWidgetComponent,
    ProgressWidgetComponent,
    UserProfileComponent,
    SearchComponent,
    EventBoardComponent,
    SearchTableComponent,
    SearchPipe,
    DashboardComponent,
    HomepageComponent,
    TripComponent,
    VvtablesComponent,
    AuditComponent,
    ClientComponent,
    CompanyComponent,
    CompanyDepartmentComponent,
    PackageComponent,
    JwtutilComponent,
    LoginHistoryComponent,
    NotificationTemplateComponent,
    NotificationComponent,
    PermisionComponent,
    RoleComponent,
    InvoicesComponent,
    UsersComponent,
    VehiclesComponent,
    SiteComponent,
    AssignRoleComponent,
    AssignPermissionComponent,
    SuperAdminComponent,
    TaxComponent,
    StatusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HomeRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
