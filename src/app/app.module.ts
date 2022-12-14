import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {SidebarModule} from 'primeng/sidebar';


import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientDetailComponent } from './pages/patient/patient-detail/patient-detail.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { AppointmentDetailComponent } from './pages/appointments/appointment-detail/appointment-detail.component';
import { DemoComponent } from './common/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PatientComponent,
    PatientDetailComponent,
    AppointmentsComponent,
    AppointmentDetailComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
