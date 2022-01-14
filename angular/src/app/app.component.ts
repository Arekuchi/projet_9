import { Component, OnInit } from '@angular/core';
import { Patient } from './models/patient';
import {PatientService} from "./patient/patient.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private patientService: PatientService) {

}


  title = 'angulardemo';



}
