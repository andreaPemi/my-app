import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-clase',
  templateUrl: './listado-clase.component.html',
  styleUrls: ['./listado-clase.component.scss']
})
export class ListadoClaseComponent implements OnInit {
  alumnos:string[];
  
  constructor() {
    //console.trace('constructor listado-clase');
    this.alumnos=['Valeria','Adriana','Alain','Luis','Raul','Asier','Adrian'];
   }

  ngOnInit() {
    
  }

}
