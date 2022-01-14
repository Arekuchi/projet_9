import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient} from "../../models/patient";
import {Location} from '@angular/common';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  patient: Patient;
  assessment: string;
  stringObect: any;


  constructor(
    private location: Location,
    private route: ActivatedRoute,
    public patientService: PatientService
  ) { }

  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("toto")
    this.patientService.getPatient(patientId).subscribe(
      response => {
        this.patient = response;
        console.log("tata")
      }
    );
    console.log("avant assessment")
    this.patientService.getPatientAssessment(patientId).subscribe(
      response => {
        this.assessment = response;
      }
    )

  }

  goBack(): void {
    this.location.back();
  }



}
