import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciaComponent } from './distancia.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    DistanciaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule

  ],
  exports: [
    DistanciaComponent,
  ],
})
export class DistanciaModule { }
