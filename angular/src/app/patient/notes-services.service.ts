import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Notes} from "../models/notes";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {

  constructor(private http: HttpClient) { }





  getAllPatientNotes(): Observable<Notes[]> {
    return this.http.get<Notes[]>("http://localhost:8181/notesList")
  }

  getNotesById(id: number): Observable<Notes>{
    return this.http.get<Notes>(`http://localhost:8181/notesById/${id}`)
  }

  getNotesByPatientId(id: number): Observable<Notes[]>{
    return this.http.get<Notes[]>(`http://localhost:8181/notesByPatientId/${id}`);
  }

  editPatientNote(id: number, params:any): Observable<any>{
    return this.http.put<Notes>(`http://localhost:8181/notesUpdate/${id}`, params);
  }

  deletePatientNote(id: number): Observable<Notes>{
    return this.http.delete<Notes>(`http://localhost:8181/notesDelete/${id}`);
  }

  addPatientNote(params: any): Observable<any>{
    return this.http.post<Notes>('http://localhost:8181/notesSave/', params);
  }

}
