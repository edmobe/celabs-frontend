import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { HomeComponent } from './_components/home/home.component';
import { InventoryComponent } from './_components/inventory/inventory.component';
import { HoursComponent } from './_components/hours/hours.component';
import { FailuresComponent } from './_components/failures/failures.component';
import { LabReservationSelectComponent } from './_components/lab-reservation-select/lab-reservation-select.component';
import { LabReservationComponent } from './_components/lab-reservation/lab-reservation.component';
import { ConfigurationComponent } from './_components/configuration/configuration.component';
import { AdministratorComponent } from './_components/configuration/config_components/administrator/administrator.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'reservations', children: [
      { path: 'calendar', component: LabReservationComponent },
      { path: '', component: LabReservationSelectComponent, pathMatch: 'full' }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'failures', component: FailuresComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'configuration/administrator', component: AdministratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
