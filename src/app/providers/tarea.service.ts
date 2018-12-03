import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../model/tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaService {

  endpoint: string = 'http://localhost:3000/tareas';
  tareas:Tarea[];
  constructor( public http: HttpClient ) { 
    console.trace('TareaService constructor');
    this.tareas=[];
  }


  getAll(): Observable<any> {
    console.trace(`TareaService getAll ${this.endpoint}`);
    return this.http.get( this.endpoint );
  }

  delete(t:Tarea): Observable<any> {
    console.trace(`TareaService delete ${this.endpoint}`);
    //this.tareas=this.getAll();
    const index: number = this.tareas.indexOf(t);
    this.tareas.splice(index, 1);
   
    return this.http.get( this.endpoint );
  }


}