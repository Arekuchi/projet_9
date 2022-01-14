import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NotesServicesService} from "../notes-services.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Notes} from "../../models/notes";
import {Location} from "@angular/common";

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {

  note: Notes;
  notesForm: FormGroup = new FormGroup({
    patientId: new FormControl('', Validators.minLength(2)),
    notes: new FormControl('', Validators.minLength(2))
  });


  constructor(
    private routeNav: Router,
    private route: ActivatedRoute,
    private notesService: NotesServicesService,
    private formBuilder: FormBuilder,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    const notesId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.notesService.getNotesById(notesId).subscribe(
      response => {
        this.note = response;
        this.initForm();
      }
    );
  }


  initForm() {
    this.notesForm = this.formBuilder.group({
      patientId: this.note.patientId,
      notes: this.note.notes
      // this.notesForm.get('notes')?.setValue(newNotes?.notes)

    })
  }

  onSubmitForm() {
    this.notesService.editPatientNote(this.note.id, this.notesForm.value).subscribe(
      response => {
        this.routeNav.navigate(['/patients']);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
