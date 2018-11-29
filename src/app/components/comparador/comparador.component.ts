import { Component, OnInit } from '@angular/core';
import { Fruta } from '../../model/fruta';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  frutas:Fruta[];
  f1:Fruta;
  f2:Fruta;

  constructor() {
    this.frutas = [];
    this.f1=new Fruta();
    this.f2=new Fruta();
    this.loadFrutas();  
    this.f1=this.frutas[0];
    this.f2=this.frutas[1];


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
    f.imagen="http://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg"

    this.frutas.push(f);

    

    //Map=>recorre el array, el reduce saca un solo valor
    //this.precioTotal=this.frutas.map(el=>el.precio).reduce((c,p)=>c+p);

    
  }  

  cargarFruta(fruta:Fruta){
    console.trace("click cargarFruta comparador",fruta);
    
    this.f2 = this.f1;
    this.f1 = fruta;
  }

}
