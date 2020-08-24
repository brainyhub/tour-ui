import { LoginComponent } from '../login/login.component';
import { TripComponent } from '../trip/trip.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { AppComponent } from '../app.component';
import { BookingComponent } from '../booking/booking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
/*    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'trip', component: TripComponent},
    { path: 'home', component: HomepageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'booking', component: BookingComponent },
    { path: '**', redirectTo: '' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
