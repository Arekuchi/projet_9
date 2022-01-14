import {Component, OnInit} from '@angular/core';
import {Notes} from "../../models/notes";
import {Observable, of} from "rxjs";
import {PatientService} from "../patient.service";
import {Router} from "@angular/router";
import {NotesServicesService} from "../notes-services.service";


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private patientService: PatientService, private route: Router, private notesService: NotesServicesService) {

  }

  ngOnInit(): void {

    this.getAllNotes();

  }

  getAllNotes(): void {
    this.notesService.getAllPatientNotes().subscribe((notes) => {
      this.dataSource = notes;
      this.notesList = this.getNotesByPatientId(3);
    });

  }

  displayedColumns: string[] = ['id', 'patientId', 'notes'];
  dataSource: Notes[];

  notesList: Notes[];


  getNotesByPatientId(patientId: number): Notes[] {
    return this.dataSource.filter((notes) => notes.patientId === patientId);
  }


}
