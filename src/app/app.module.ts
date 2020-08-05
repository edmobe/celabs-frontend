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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
