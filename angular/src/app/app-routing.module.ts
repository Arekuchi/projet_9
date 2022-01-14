import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PatientAddComponent} from "./patient/patient-add/patient-add.component";
import { DashboardComponent} from './dashboard/dashboard.component';
import {PatientInfoComponent} from "./patient/patient-info/patient-info.component";
import {PatientEditComponent} from "./patient/patient-edit/patient-edit.component";
import {PatientNotesComponent} from "./patient/patient-notes/patient-notes.component";
import {NotesListComponent} from "./patient/notes-list/notes-list.component";
import {NotesAddComponent} from "./patient/notes-add/notes-add.component";
import {NotesEditComponent} from "./patient/notes-edit/notes-edit.component";

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent},
  { path: 'patients', component: PatientComponent },
  { path: 'patient-info/:id', component: PatientInfoComponent},
  { path: 'patient-add', component: PatientAddComponent},
  { path: 'patient-edit/:id', component: PatientEditComponent},
  { path: 'patient-notes/:id', component: PatientNotesComponent},
  { path: 'notes-list', component: NotesListComponent},
  { path: 'notes-add/:id', component: NotesAddComponent},
  { path: 'notes-edit/:id', component: NotesEditComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
