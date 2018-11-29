import { Component, OnInit } from '@angular/core';
import { Fruta } from '../../model/fruta';

@Component({
  selector: 'app-frutaejercicio',
  templateUrl: './frutaejercicio.component.html',
  styleUrls: ['./frutaejercicio.component.scss']
})
export class FrutaejercicioComponent implements OnInit {
  frutas:Fruta[];
  precioTotal:number;
  nombresFrutas:string[];
  frutasOferta:Fruta[];
  primerFrutaOferta:Fruta;
  primerFrutaOfertaVerde:Fruta;
  frutasRojas:Fruta[];

  constructor() {
     console.trace("FrutaejercicioComponent constructor");
     this.frutas = [];
     this.loadFrutas();  
     this.frutasRojas = this.frutas.filter(el => el.colores.find(c => c === 'Rojo'));   
     this.nombresFrutas=this.frutas.map(el=>el.nombre);  
     this.frutasOferta=this.frutas.filter(el=>el.oferta);
     this.precioTotal= this.frutas.map(f=>f.precio).reduce( (p,c)=> p + c);
     this.primerFrutaOferta = this.frutas.find( f => f.oferta );
     this.primerFrutaOfertaVerde=this.frutas.filter( f => f.colores.find(c=>c==='verde') ).find(f=>f.oferta);
     //this.frutaColorRojo
   }

  ngOnInit() {
  }
  loadFrutas():void{
    let f: Fruta = new Fruta(); 

    f.nombre="banana";
    f.precio= 3.15,
    f.calorias= 500,
    f.colores=["amarillo", "negro"],
    f.oferta= true;
    f.imagen="https://nutriliving-images.imgix.net/images/2014/335/12907/C07BEDA0-8F79-E411-A121-0287E8A1303A.jpg?ch=DPR&w=488&h=488&auto=compress,format&dpr=1";

    this.frutas.push(f);

    f= new Fruta(); 
    f.nombre="pera";
    f.precio= 2,
    f.calorias= 350,
    f.colores=["amarillo", "verde"],
    f.oferta= false;
    f.imagen="http://www.haciendasbio.com/63-large_default/peras.jpg";
    this.frutas.push(f);

    f= new Fruta(); 
    f.nombre="fresa";
    f.precio= 0.75,
    f.calorias= 100,
    f.colores=["rosa", "rojo","verde"],
    f.oferta= true;
    f.imagen="data:image/jpeg;base64,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"

    this.frutas.push(f);

    

    //Map=>recorre el array, el reduce saca un solo valor
    //this.precioTotal=this.frutas.map(el=>el.precio).reduce((c,p)=>c+p);

    
  }  
  
}
