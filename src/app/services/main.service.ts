import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getallstudentsortbyclassroom(
    student_level: any,
    student_classroom: any
  ): Observable<any> {
    return this.http.post(
      API_URL + 'user/student/get/sortbyclassandroom',
      {
        student_level,
        student_classroom,
      },
      httpOptions
    );
  }

}
