import { Pipe, PipeTransform } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';

@Pipe({
  name: 'alquilado'
})
export class VideojuegoPipe implements PipeTransform {



  transform(videojuegos: Videojuego[], alquilado:boolean): any {
    console.debug("VideojuegoPipePipe transform");
    let resul:Videojuego[]=[];

    videojuegos.forEach(v => {
      if(v.alquilado===alquilado){
        resul.push(v);
      }
    });
    
    return resul;
  }

}
