import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Notes} from "../../models/notes";
import {NotesServicesService} from "../notes-services.service";
import {PatientService} from "../patient.service";
import {Patient} from "../../models/patient";

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {

  patient: Patient;
  note: Notes;
  noteAddForm: FormGroup;
  notesId = parseInt(this.route.snapshot.paramMap.get('id'));


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private notesService: NotesServicesService,
    private patientService: PatientService
  ) {
  }

  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.patientService.getPatient(patientId).subscribe(
      response => {
        this.patient = response;
      }
    );
    this.initForm();
  }

  initForm() {
    this.noteAddForm = this.formBuilder.group({
      patientId: this.notesId,
      notes: ''
    });
  }


  goBack(): void {
    this.location.back();
  }

  onSubmitForm() {
    this.notesService.addPatientNote(this.noteAddForm.value).subscribe(
      response => {
        this.note = response;
        this.goBack();
      }
    )
  }
}



