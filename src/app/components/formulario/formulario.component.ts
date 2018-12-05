import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { Fruta } from '../../model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  simple: FormControl;         //control o input del formulario
  formulario: FormGroup;      //Formulario para agrupar inputs(formControl)
  msg: string;
  colores:FormArray;          //Array de FormControl(input)

  constructor(public frutaService: FrutaService) {
    console.log("FormularioComponent constructor");
    this.msg = "";
    //Control unico
    this.simple = new FormControl('');
    this.simple.setValue('Alcaparra');    //poner valor por defecto

    //Agrupacion de controles==formulario
    this.formulario = new FormGroup({
      nombre: new FormControl('',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)]
      ),
      precio: new FormControl(
        1, //valor inicial
        [Validators.required,
        Validators.min(0.1),
        Validators.max(999)]
      ),
      calorias: new FormControl(0),
      colores:new FormArray([this.crearColorFormGroup()],Validators.minLength(1)),
      oferta: new FormControl(false),
      descuento: new FormControl(5, [Validators.min(5),Validators.max(90)]),
      imagen: new FormControl("",[Validators.required,Validators.pattern('^(http(s?):\/\/).+(\.(png|jpg|jpeg))$')]),
      cantidad: new FormControl(0,[Validators.min(1),Validators.max(999)])      
    });

  }

  ngOnInit() {
    console.log("FormularioComponent init");

  }

  cargarFormulario() {
    this.formulario.controls.nombre.setValue("kiwi");
    this.formulario.controls.precio.setValue(11);
    this.formulario.controls.calorias.setValue(12);
    //this.formulario.controls.colores.setValue("verde");
    this.formulario.controls.oferta.setValue(false);
    this.formulario.controls.descuento.setValue(0);
    this.formulario.controls.imagen.setValue("");
    this.formulario.controls.cantidad.setValue(3);

  }

  crear() {
    console.log("enviar formulario" + this.formulario);

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
      this.msg = "Fruta registrada correctamente";
    }
  }

  crearColorFormGroup():FormGroup{

    return new FormGroup({
      color:new FormControl('morado',[Validators.required, Validators.minLength(2),Validators.maxLength(15)])
    });
  }

  nuevoColor(){
    let arrayColores=this.formulario.get('colores') as FormArray;
    arrayColores.push(this.crearColorFormGroup());
    
  }

  eliminarColor(i:number){
    let arrayColores=this.formulario.get('colores') as FormArray;
   
    if (arrayColores.length>1) {
    arrayColores.removeAt(i);
   }
    
  }
}
