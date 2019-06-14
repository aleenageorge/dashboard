import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private _url = '/assets/employees.json';

  getDisplay() {
   const empdetails = [
      { empname: 'A', age: 31, email: 'abc@this.gmail.com', number: 789456123},
      { empname: 'B', age: 48, email: 'abc@this.gmail.com', number: 789456123},
      { empname: 'C', age: 22, email: 'abc@this.gmail.com', number: 789456123 },
      { empname: 'D', age: 56, email: 'abc@this.gmail.com', number: 789456123 },
      { empname: 'E', age: 55, email: 'abc@this.gmail.com', number: 789456123 },
      { empname: 'F', age: 41, email: 'abc@this.gmail.com', number: 789456123 },
      { empname: 'G', age: 23, email: 'abc@this.gmail.com', number: 789456123 },
      { empname: 'H', age: 36, email: 'abc@this.gmail.com', number: 789456123 },
      { empname: 'I', age: 11, email: 'abc@this.gmail.com', number: 789456123 },
      { empname: 'J', age: 80, email: 'abc@this.gmail.com', number: 789456123 },
      { empname: 'K', age: 61, email: 'abc@this.gmail.com', number: 789456123 },

    ];
   return empdetails;
  }

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
