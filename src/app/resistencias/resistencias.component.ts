import { Component } from '@angular/core';
import { colors, tolerancias } from './colores';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  for_Colors = colors
  for_Tolerancia = tolerancias

  resultado = ''
  banda1! : string
  banda2! : string
  multi! : number
  tole! : string

  calcular(){
    let result = parseInt(this.banda1 + this.banda2) * this.multi

    this.resultado = 'Valor resistencia ' + result + ' ohms.'
    + ' Con una tolerancia de '
  }
}
