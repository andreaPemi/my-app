import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../../model/videojuego';
import { Persona } from '../../model/persona';
import { tipopersona } from '../../model/tipopersona';

@Component({
  selector: 'app-videojuego-detalle',
  templateUrl: './videojuego-detalle.component.html',
  styleUrls: ['./videojuego-detalle.component.scss']
})
export class VideojuegoDetalleComponent implements OnInit {
  titulo:string;
  videojuego:Videojuego;
  personadefecto:Persona;
  yo:Persona;
  valeria:Persona;
  
  constructor() { 
    console.trace("VideojuegoDetalleComponent constructor");
    this.titulo="Aprendiendo a usar Clases";
    this.videojuego=new Videojuego();

    //LLamamos al setter siempre qu eesté definido:
    this.videojuego.titulo="Mario Bross";
    
    //Ejercicio persona
    this.personadefecto=new Persona();   

    this.yo=new Persona();
    this.yo.nombre="Andrea";
    this.yo.apellidos="Perez Millan";
    this.yo.edad=0;
    this.yo.email="andrea@hotm.com";
    this.yo.sexo=tipopersona.F;


    this.valeria=new Persona();
    this.valeria=new Persona();
    this.valeria.nombre="Valeria";
    this.valeria.apellidos="Valencia";
    this.yo.edad=0;
    this.yo.email="valeria@hotm.com";
    this.yo.sexo=tipopersona.F;
  }

  ngOnInit() {
    console.trace("VideojuegoDetalleComponent init");
  }

}
