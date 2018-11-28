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
  titulo: string;
  videojuego: Videojuego;
  personas: Persona[];

  constructor() {
    console.trace("VideojuegoDetalleComponent constructor");
    this.titulo = "Aprendiendo a usar Clases";
    this.videojuego = new Videojuego();   

    //LLamamos al setter siempre qu eesté definido:
    this.videojuego.titulo = "Mario Bross";
    this.personas = [];
    this.loadPersonas();
  }

  //Ejercicio persona
  loadPersonas(): void {
    let p: Persona = new Persona();
    this.personas.push(p);
    p = new Persona();

    p.nombre = "Andrea";
    p.apellidos = "Perez Millan";
    p.edad = 0;
    p.email = "andrea@hotm.com";
    p.sexo = tipopersona.F;
    this.personas.push(p);
    
    p = new Persona();
    p.nombre = "Valeria";
    p.apellidos = "Valencia";
    p.edad = 0;
    p.email = "valeria@hotm.com";
    p.sexo = tipopersona.F;
    this.personas.push(p);
  }
  ngOnInit() {
    console.trace("VideojuegoDetalleComponent init");
  }

}
