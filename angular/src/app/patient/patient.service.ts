import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Patient} from '../models/patient';
import {Observable} from 'rxjs';
import {Notes} from "../models/notes";
import {parseJson} from "@angular/cli/utilities/json-file";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    headersString: new HttpHeaders({ 'Content-Type': 'string' })
  };

  constructor(private http: HttpClient) { }


  // PATIENT
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>("http://localhost:8080/patientList");
  }

  getPatient(id: number): Observable<Patient>{
    return this.http.get<Patient>(`http://localhost:8080/patientById/${id}`);
  }

  deletePatient(id: number): Observable<Patient>{
    return this.http.delete<Patient>(`http://localhost:8080/patientDelete/${id}`);
  }

  editPatient(id: number, params:any): Observable<any>{
    return this.http.put<Patient>(`http://localhost:8080/patientUpdate/${id}`, params);
  }

  addPatient(params:any): Observable<any>{
    return this.http.post<Patient>(`http://localhost:8080/patientSave/`, params);
  }


  // ASSESSMENT

  getPatientAssessment(id: number): Observable<any>{
    const url = `http://localhost:8282/assess/id?id=${id}`;

    return this.http.get(url, {responseType: 'text'});
  }

}
