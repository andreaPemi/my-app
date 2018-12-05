import { Component, OnInit } from '@angular/core';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Fruta } from 'src/app/model/fruta';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-crud-fruta',
  templateUrl: './crud-fruta.component.html',
  styleUrls: ['./crud-fruta.component.scss']
})
export class CrudFrutaComponent implements OnInit {

  frutas:Fruta[];
  formulario: FormGroup;

  constructor(public frutaService:FrutaService ,private route: ActivatedRoute) { }

  ngOnInit() {
    //listar
    this.frutaService.getAll().subscribe(data=>{
      this.frutas=data.map(el=>el);      
    })

    //Ir detalle    
    this.route.params.subscribe(params => {
     let id = +params['id']; // (+) converts string 'id' to a number
      // llamar provider para conseguir datos a traves del id

   });
  }

  crear() {
    console.log("crear fruta" + this.formulario);

    let fruta = new Fruta();

    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.colores = this.formulario.controls.colores.value;
    fruta.oferta = this.formulario.controls.oferta.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.cantidad = this.formulario.controls.cantidad.value;

    if (this.frutaService.add(fruta).subscribe(data => {
      console.log(data);
      console.debug("fruta creada: %o", data);
    })) {
     // this.msg = "Fruta registrada correctamente";
    }
  }

  


}
