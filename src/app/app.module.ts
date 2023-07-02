import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { FormsModule } from '@angular/forms';
import { PizzasModule } from './pizzas/pizzas.module';
import { DistanciaModule } from './distancia/distancia.module';
import { CineComponent } from './cine/cine.component';
import { CineModule } from './cine/cine.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ResistenciasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DistanciaModule,
    FormsModule,
    BrowserAnimationsModule,
    PizzasModule,
    AppRoutingModule,
    CineModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
