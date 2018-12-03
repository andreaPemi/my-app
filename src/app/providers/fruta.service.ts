import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruta } from '../model/fruta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {
  endpoint: string = 'http://localhost:3000/frutas';
  
  constructor(public http: HttpClient ) { 
    console.log("FrutaService constructor");
   }
  
  getAll(): Observable<any> {
    console.trace(`FrutaService getAll ${this.endpoint}`);
    return this.http.get( this.endpoint);
  }  
}
