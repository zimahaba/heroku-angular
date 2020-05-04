import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Heroku } from './Heroku';

@Injectable({
  providedIn: 'root'
})
export class HerokuService {
  constructor(private http: HttpClient) { }
  
  getHeroku() {
    return this.http.get('https://zimahaba-heroku-backend.herokuapp.com/teste');
  }

}
