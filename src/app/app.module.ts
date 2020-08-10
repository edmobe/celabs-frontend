import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { LabReservationComponent } from './_components/lab-reservation/lab-reservation.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { HomeComponent } from './_components/home/home.component';
import { InventoryComponent } from './_components/inventory/inventory.component';
import { FailuresComponent } from './_components/failures/failures.component';
import { HoursComponent } from './_components/hours/hours.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationComponent } from './_components/configuration/configuration.component';
import { LabReservationNormalComponent } from './_components/lab-reservation-normal/lab-reservation-normal.component';
import { LabReservationPalmadaComponent } from './_components/lab-reservation-palmada/lab-reservation-palmada.component';
import { LabReservationSelectComponent } from './_components/lab-reservation-select/lab-reservation-select.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './_components/side-bar/side-bar.component';
import { AdministratorComponent } from './_components/configuration/config_components/administrator/administrator.component';
import { SemestreComponent } from './_components/configuration/config_components/semestre/semestre.component';
import { LaboratoryAvailabilityComponent } from './_components/configuration/config_components/laboratory-availability/laboratory-availability.component';
import { CoursesComponent } from './_components/configuration/config_components/courses/courses.component';
import { AssetsComponent } from './_components/configuration/config_components/assets/assets.component';
import { FailuresStatusComponent } from './_components/configuration/config_components/failures-status/failures-status.component';
import { CoperatorComponent } from './_components/configuration/config_components/coperator/coperator.component';
import { CsupportTeamComponent } from './_components/configuration/config_components/csupport-team/csupport-team.component';
import { CTeachersAdministrativeComponent } from './_components/configuration/config_components/cteachers-administrative/cteachers-administrative.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './_components/not-found/not-found.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  timeGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LabReservationComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    InventoryComponent,
    FailuresComponent,
    HoursComponent,
    ConfigurationComponent,
    LabReservationNormalComponent,
    LabReservationPalmadaComponent,
    LabReservationSelectComponent,
    SideBarComponent,
    AdministratorComponent,
    SemestreComponent,
    LaboratoryAvailabilityComponent,
    CoursesComponent,
    AssetsComponent,
    FailuresStatusComponent,
    CoperatorComponent,
    CsupportTeamComponent,
    CTeachersAdministrativeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LabReservationNormalComponent, LabReservationPalmadaComponent]
})
export class AppModule { }
