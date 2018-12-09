import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FrutaejercicioComponent } from './components/frutaejercicio/frutaejercicio.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from 'src/app/components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutaComponent } from 'src/app/components/crud-fruta/crud-fruta.component';
import { DetalleFrutaComponent } from 'src/app/components/detalle-fruta/detalle-fruta.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'fruta', component:FrutaComponent},
  {path:'flujo', component:FlujoInformacionComponent}, 
  {path:'videojuego-detalle', component:VideojuegoDetalleComponent}, 
  {path:'pipe', component:PipeComponent},
  {path:'fruta-ejercicio', component:FrutaejercicioComponent}, 
  {path:'comparador', component:ComparadorComponent},
  {path:'tareas', component:TareaComponent}, 
  {path:'formulario', component:FormularioComponent}, 
  { path: 'detalle/:id', component: DetalleFrutaComponent},
  {path:'fruta-crud', component:CrudFrutaComponent},
  {path:'detalle', component:DetalleFrutaComponent},  
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
