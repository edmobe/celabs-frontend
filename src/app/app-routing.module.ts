import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { RegistrationComponent } from './_components/registration/registration.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { HomeComponent } from './_components/home/home.component';
import { InventoryComponent } from './_components/inventory/inventory.component';
import { HoursComponent } from './_components/hours/hours.component';
import { FailuresComponent } from './_components/failures/failures.component';
import { LabReservationSelectComponent } from './_components/lab-reservation/lab-reservation-select/lab-reservation-select.component';
import { LabReservationComponent } from './_components/lab-reservation/lab-reservation.component';
import { ConfigurationComponent } from './_components/configuration/configuration.component';
import { AdministratorComponent } from './_components/configuration/config_components/administrator/administrator.component';
import { CoperatorComponent } from './_components/configuration/config_components/coperator/coperator.component';
import { CsupportTeamComponent } from './_components/configuration/config_components/csupport-team/csupport-team.component';
import { CTeachersAdministrativeComponent } from './_components/configuration/config_components/cteachers-administrative/cteachers-administrative.component';
import { FailuresStatusComponent } from './_components/configuration/config_components/failures-status/failures-status.component';
import { LaboratoryAvailabilityComponent } from './_components/configuration/config_components/laboratory-availability/laboratory-availability.component';
import { SemestreComponent } from './_components/configuration/config_components/semestre/semestre.component';
import { CoursesComponent } from './_components/configuration/config_components/courses/courses.component';
import { AssetsComponent } from './_components/configuration/config_components/assets/assets.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';
import {AuthGuard} from './auth/auth.guard'
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'reservations',
    children: [
      { path: 'calendar', component: LabReservationComponent },
      { path: '', component: LabReservationSelectComponent, pathMatch: 'full' },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'inventory', component: InventoryComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'failures', component: FailuresComponent },
  {
    path: 'configuration',
    component: ConfigurationComponent, canActivate: [AuthGuard] , data: { roles: ['Administrador'] },
    children: [
      { path: '', redirectTo: 'administrator', pathMatch: 'full' },
      { path: 'administrator', component: AdministratorComponent },
      { path: 'operators', component: CoperatorComponent },
      { path: 'supportTeam', component: CsupportTeamComponent },
      {
        path: 'teachersadministrative',
        component: CTeachersAdministrativeComponent,
      },
      { path: 'failuresStatus', component: FailuresStatusComponent },
      {
        path: 'laboratoryAvailability',
        component: LaboratoryAvailabilityComponent,
      },
      { path: 'semester', component: SemestreComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'assets', component: AssetsComponent },
    ],
  },
  { path: 'error', component: NotFoundComponent },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
