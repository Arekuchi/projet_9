import {Component, OnInit} from '@angular/core';
import {Patient} from '../models/patient';
import {PatientService} from "./patient.service";
import {NgForm} from "@angular/forms";
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[] = [];
  patient: Patient;

  constructor(private patientService: PatientService, private route: Router) {

  }

  ngOnInit() {

    this.retrievePatients();
  }


  displayedColumns: string[] = ['id', 'givenName', 'familyName', 'birthdate', 'sex', 'homeAddress', 'phoneNumber', 'actions'];

  dataSource: any;

  private retrievePatients(): void {
    this.patientService.getPatients().subscribe(patients => this.dataSource = patients);
  }

  onSubmit(from: NgForm) {
    console.log(from.value);

  }

  onClickRedirect() {
    this.route.navigate(['/patient-add']);

  }

  onClickEdit(id: number) {
    this.route.navigate(['/patient-edit/' + id]);
  }

  onClickDisplay(id: number) {
    this.route.navigate(['/patient-info/' + id]);
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(
      () => {
        this.retrievePatients();
      }
    );
    this.route.navigate(['/patients']);
  }

  onClickNotes(id: number) {
    this.route.navigate(['/patient-notes/' + id]);
  }

  onClickNewNotes(id: number) {
    this.route.navigate(['/notes-add/' +id]);
  }


}
