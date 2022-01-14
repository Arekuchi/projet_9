import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientComponent } from './patient/patient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { PatientInfoComponent } from './patient/patient-info/patient-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientNotesComponent } from './patient/patient-notes/patient-notes.component';
import { NotesListComponent } from './patient/notes-list/notes-list.component';
import { NotesAddComponent } from './patient/notes-add/notes-add.component';
import { NotesEditComponent } from './patient/notes-edit/notes-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientInfoComponent,
    DashboardComponent,
    PatientAddComponent,
    PatientEditComponent,
    PatientNotesComponent,
    NotesListComponent,
    NotesAddComponent,
    NotesEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
