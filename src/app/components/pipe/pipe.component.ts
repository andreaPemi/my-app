import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../../model/videojuego';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  fecha: Date;
  pi: number;
  videojuegos: Videojuego[];

  constructor() {
    this.fecha = new Date();
    this.pi = 3.14166453;
    this.videojuegos = [];
    this.loadVideojuegos();
  }

  ngOnInit() {
  }

  loadVideojuegos(): void {
    let v: Videojuego = new Videojuego();
    v.titulo="Mario Bross";
    v.alquilado=true;
    this.videojuegos.push(v);

    v=new Videojuego();
    v.titulo='Donkey Kong';
    v.alquilado=true;
    this.videojuegos.push(v);

    v=new Videojuego();
    v.titulo='Zelda';
    v.alquilado=false;
    this.videojuegos.push(v);

    v=new Videojuego();
    v.titulo='Invaders Space';
    v.alquilado=false;
    this.videojuegos.push(v);
    
  }

}
