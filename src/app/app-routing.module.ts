import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { LabReservationComponent } from './_components/lab-reservation/lab-reservation.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { HomeComponent } from './_components/home/home.component';
import { InventoryComponent } from './_components/inventory/inventory.component';
import { HoursComponent } from './_components/hours/hours.component';
import { FailuresComponent } from './_components/failures/failures.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lab-reservation', component: LabReservationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'failures', component: FailuresComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
