import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruta } from '../model/fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  frutas:Fruta[];
  constructor() { 
    console.log("FrutaService constructor");
    this.frutas=[];
  }

  //listado de frutas

  getAll():Fruta[]{
  this.loadFrutas();  
  
  return this.frutas;
  }

  //Cambiar por llamada a service REST
  loadFrutas():void{
    this.frutas=[];
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
    
  }  
}
