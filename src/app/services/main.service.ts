import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Test Server
// const API_URL = 'http://localhost:8080/api/';

//Production Server
const API_URL = 'https://bloodee-backend.azurewebsites.net/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getTodayData(): Observable<any> {
    return this.http.get(API_URL + 'get/today', httpOptions);
  }

  getCheat(id: string): Observable<any> {
    return this.http.get(API_URL + 'get/cheat/' + id, httpOptions);
  }
  getFood(
    id: string,
  ): Observable<any> {
    return this.http.get(API_URL + 'get/food/' + id, httpOptions);
  }

  updateDailySelect(daily_select: number, daily_cheat: number, daily_food: number): Observable<any> {
    return this.http.post(API_URL + 'update/daily', {
      daily_select,
      daily_cheat,
      daily_food
    }, httpOptions);

  }

  getDailyCoupon(): Observable<any> {
    return this.http.get(API_URL + 'get/daily_coupon', httpOptions);
  }

  updateUser(
    email: string,
    prefix: string,
    firstname: string,
    surname: string,
  ): Observable<any> {
    return this.http.post(API_URL + 'update/user', {
      email,
      prefix,
      firstname,
      surname
    }, httpOptions);
  }

  getUser():Observable<any> {
    return this.http.get(API_URL + 'get/user', httpOptions);
  }
}
