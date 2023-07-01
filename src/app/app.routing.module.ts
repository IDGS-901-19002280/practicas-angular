import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { PizzasComponent } from './pizzas/pizzas.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { DistanciaComponent } from './distancia/distancia.component';


const routes:Routes=[
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path:'PizzasComponent', component: PizzasComponent},
{path:'ResistenciasComponent', component: ResistenciasComponent},
{path: 'DistanciaComponent', component: DistanciaComponent},

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
