import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {
  
  // Atributos solo declarados no se inicializa
  titulo:string;
  frutas: string[];

  constructor() {
    console.trace('frutaComponent constructor');
    this.titulo= 'fruta';
    this.frutas=['fresa','platano','mango','kiwi'];
   }

ngOnInit() {
  console.trace('frutaComponent init');
  }

}
