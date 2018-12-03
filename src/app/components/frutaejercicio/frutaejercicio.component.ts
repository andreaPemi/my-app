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
    f.cantidad=0;
    this.frutas.push(f);
    

    f= new Fruta(); 
    f.nombre="pera";
    f.precio= 2,
    f.calorias= 350,
    f.colores=["amarillo", "verde"],
    f.oferta= false;
    f.imagen="http://www.haciendasbio.com/63-large_default/peras.jpg";
    f.cantidad=0;
    this.frutas.push(f);

    f= new Fruta(); 
    f.nombre="fresa";
    f.precio= 0.75,
    f.calorias= 100,
    f.colores=["rosa", "rojo","verde"],
    f.oferta= true;
    f.imagen="http://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg"
    f.cantidad=0; 
    this.frutas.push(f);

    

    //Map=>recorre el array, el reduce saca un solo valor
    //this.precioTotal=this.frutas.map(el=>el.precio).reduce((c,p)=>c+p);

    
  }  
  
}
