import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
    {   path:'ResistenciasComponent', component:  ResistenciasComponent},
    {   path:'DistanciaComponent', component:  DistanciaComponent},
    {   path:'PizzasComponent', component:  PizzasComponent},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
