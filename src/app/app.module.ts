//Modulos de angular
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ListadoClaseComponent } from './components/listado-clase/listado-clase.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { tipopersonaPipe } from './pipes/tipopersona.pipe';
import { FrutaejercicioComponent } from './components/frutaejercicio/frutaejercicio.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';



//Providers
import { FrutaService } from './providers/fruta.service';
import { TareaService } from './providers/tarea.service';



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
    TareaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // cargamos el módulo en el array de imports
  ],
  providers: [
    FrutaService,
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
