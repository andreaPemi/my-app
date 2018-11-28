import { Pipe, PipeTransform } from '@angular/core';
import { tipopersona } from '../model/tipopersona';
import { Persona } from '../model/persona';

@Pipe({
  name: 'sexo'
})
export class tipopersonaPipe implements PipeTransform {

  transform(personas:Persona[], sexo:tipopersona): any {
    let resul:Persona[]=[];

    personas.forEach(p => {
      if(p.sexo===sexo){
        resul.push(p);
      }
    });    
    
    return resul;
  }

}
