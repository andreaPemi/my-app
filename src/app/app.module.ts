//Modulos de angular
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ListadoClaseComponent } from './components/listado-clase/listado-clase.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';

import { FrutaejercicioComponent } from './components/frutaejercicio/frutaejercicio.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutaComponent } from './components/crud-fruta/crud-fruta.component';

//Pipes
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { tipopersonaPipe } from './pipes/tipopersona.pipe';
import { TareasPipe } from './pipes/tareas.pipe';

//Providers
import { FrutaService } from './providers/fruta.service';
import { TareaService } from './providers/tarea.service';
import { DetalleFrutaComponent } from './components/detalle-fruta/detalle-fruta.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    ListadoClaseComponent,
    FlujoInformacionComponent,
    HomeComponent,
    Page404Component,
    VideojuegoDetalleComponent,
    PipeComponent,
    VideojuegoPipe,
    tipopersonaPipe,   
    FrutaejercicioComponent,
    FrutaCardComponent,
    ComparadorComponent,
    TareaComponent,
    TareasPipe,
    FormularioComponent,
    CrudFrutaComponent,
    DetalleFrutaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //banana in a box(ngModule)
    ReactiveFormsModule,
    HttpClientModule, // peticiones http
  ],
  providers: [
    FrutaService,
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
