import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

//Test Server
// const AUTH_API = "http://localhost:8080/api/auth/";

//Production Server
// const AUTH_API = "https://bloodee-backend.azurewebsites.net/api/auth/"; 
const AUTH_API = "https://backend.bloodee.imgc.piriyapol.me/api/auth/"; 

//httpOptions
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private token: TokenStorageService) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(email: string, username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        email,
        username,
        password,
      },
      httpOptions
    )
  }
}
