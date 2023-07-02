import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { MenuComponent } from '../menu/menu.component';
import { ResistenciasComponent } from '../resistencias/resistencias.component';
import { CineComponent } from './cine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app.routing.module';
import { DistanciaModule } from '../distancia/distancia.module';
import { PizzasModule } from '../pizzas/pizzas.module';



@NgModule({
  declarations: [
    CineComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DistanciaModule,
    FormsModule,
    BrowserAnimationsModule,
    PizzasModule,
    AppRoutingModule,
    ReactiveFormsModule

  ]
})
export class CineModule { }
