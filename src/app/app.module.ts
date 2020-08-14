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
import { LabReservationNormalComponent } from './_components/lab-reservation/lab-reservation-normal/lab-reservation-normal.component';
import { LabReservationPalmadaComponent } from './_components/lab-reservation/lab-reservation-palmada/lab-reservation-palmada.component';
import { LabReservationSelectComponent } from './_components/lab-reservation/lab-reservation-select/lab-reservation-select.component';
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
import { LabReservationNormalSelectComponent } from './_components/lab-reservation/lab-reservation-normal-select/lab-reservation-normal-select.component';
import { LabReservationNormalClassComponent } from './_components/lab-reservation/lab-reservation-normal-class/lab-reservation-normal-class.component';
import { ToastrModule } from 'ngx-toastr';
import { SurveyComponent } from './_components/survey/survey.component';
import { ConfirmationComponent } from './_components/alerts/confirmation/confirmation.component';
import { AlertComponent } from './_components/alerts/alert/alert.component';
import { RegistrationComponent } from './_components/registration/registration.component';
import { UserService } from './_services/api/user.service';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ApproveTeachersAdministrativeComponent } from './_components/configuration/config_components/cteachers-administrative/approve-teachers-administrative/approve-teachers-administrative.component';
import { HttpClientModule } from '@angular/common/http';
import { HoursModalComponent } from './_components/hours/hours-modal/hours-modal.component';
import { ApproveSlapComponent } from './_components/configuration/config_components/approve-slap/approve-slap.component';
import { AprobarReservasComponent } from './_components/configuration/config_components/aprobar-reservas/aprobar-reservas.component';
import { AdminhomeComponent } from './_components/home/adminhome/adminhome/adminhome.component';
import { InventoryReportComponent } from './_components/inventory/inventory-report/inventory-report.component';
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
    NotFoundComponent,
    LabReservationNormalSelectComponent,
    LabReservationNormalClassComponent,
    SurveyComponent,
    ConfirmationComponent,
    AlertComponent,
    RegistrationComponent,
    ApproveTeachersAdministrativeComponent,
    ApproveSlapComponent,
    AprobarReservasComponent,
    AdminhomeComponent,
    HoursModalComponent,
    InventoryReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [UserService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [LabReservationNormalComponent, LabReservationPalmadaComponent]
})
export class AppModule { }