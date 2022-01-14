import {Component, OnInit} from '@angular/core';
import {Patient} from "../../models/patient";
import {PatientService} from "../patient.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  patient: Patient;
  patientAddForm: FormGroup;

  constructor(
    private route: Router,
    private location: Location,
    private patientService: PatientService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.patientAddForm = this.formBuilder.group({
      givenName: '',
      familyName: '',
      birthdate: '',
      sex: '',
      homeAddress: '',
      phoneNumber: ''
    });
  }

  onSubmitForm() {
    this.patientService.addPatient(this.patientAddForm.value).subscribe(
      response => {
        this.patient = response;
        this.goBack();

      }
    )
  }


  goBack(): void {
    this.route.navigate(['/patients']);
  }

}
