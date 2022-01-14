import {Component, OnInit} from '@angular/core';
import {Patient} from "../../models/patient";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Notes} from "../../models/notes";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../patient.service";
import {Location} from '@angular/common';
import {Observable, of} from "rxjs";
import {NotesServicesService} from "../notes-services.service";

@Component({
  selector: 'app-patient-notes',
  templateUrl: './patient-notes.component.html',
  styleUrls: ['./patient-notes.component.css']
})
export class PatientNotesComponent implements OnInit {

  patient: Patient;
  displayedColumns: string[] = ['Note id', 'Patient Id', 'Note content', 'actions'];
  dataSource: any;

  constructor(
    private route: ActivatedRoute,
    private routeNav: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private notesService: NotesServicesService
  ) {
  }


  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.patientService.getPatient(patientId).subscribe(
      response => {
        this.patient = response;
      }
    );
    this.notesService.getNotesByPatientId(patientId).subscribe(
      response => {
        this.dataSource = response;

      }
    );
  }

  onClickRedirect(id: number) {
    this.routeNav.navigate(['/notes-add/' + id]);

  }

  onClickDisplay(id: number) {
    this.routeNav.navigate(['/patient-info/' + id]);
  }

  deletePatient(id: number) {
    this.notesService.deletePatientNote(id).subscribe(
      () => {
        // this.retrievePatients();
      }
    );
    this.routeNav.navigate(['/patients']);
  }

  onClickNotes(id: number) {
    this.routeNav.navigate(['/notes-edit/' + id]);
  }

  goBack(): void {
    this.routeNav.navigate(['/patients']);
  }


}
