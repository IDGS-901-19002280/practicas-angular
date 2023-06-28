import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { RestModule } from './resistencias/rest/rest.module';
import { DistanciaModule } from "./distancia/distancia.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RestModule,
        BrowserAnimationsModule,
        DistanciaModule
    ]
})
export class AppModule { }
