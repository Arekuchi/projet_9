import {Component, OnInit} from '@angular/core';
import {PatientService} from '../patient.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Patient} from "../../models/patient";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  patient: Patient;
  patientForm: FormGroup= new FormGroup({
    name: new FormControl('', Validators.minLength(2)),
    lastname: new FormControl('', Validators.minLength(2)),
    birthdate: new FormControl('', Validators.minLength(2)),
    sex: new FormControl('', Validators.minLength(1)),
    homeAddress: new FormControl('', Validators.minLength(1)),
    phoneNumber: new FormControl('', Validators.minLength(1)),
  });

  constructor(
    private routeNav: Router,
    private location: Location,
    private route: ActivatedRoute,
    private patientService: PatientService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.patientService.getPatient(patientId).subscribe(
      response => {
        this.patient = response;
        this.initForm();
      }
    );
  }

  initForm() {
    this.patientForm = this.formBuilder.group({
      givenName: this.patient.givenName,
      familyName: this.patient.familyName,
      birthdate: this.patient.birthdate,
      sex: this.patient.sex,
      homeAddress: this.patient.homeAddress,
      phoneNumber: this.patient.phoneNumber
    });
  }


  // initForm() {
  //   this.patientForm = this.formBuilder.group({
  //     givenName: this.patient.givenName,
  //     familyName: this.patient.familyName,
  //     birthdate: this.patient.birthdate,
  //     sex: this.patient.sex,
  //     homeAddress: this.patient.homeAddress,
  //     phoneNumber: this.patient.phoneNumber
  //   });
  // }

  onSubmitForm() {
    this.patientService.editPatient(this.patient.id, this.patientForm.value).subscribe(
      response => {
        this.routeNav.navigate(['/patients']);
      }
    );
  }

  goBack(): void {
    this.routeNav.navigate(['/patients']);
  }

}
