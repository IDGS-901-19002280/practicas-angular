import { Component } from '@angular/core';
import { colors, resistencias } from './colores';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  for_Colors = colors
  for_Resistencias = resistencias

  resultado! : number
  banda1! : string
  banda2! : string
  multi! : string
  resis! : number
  valmen! : number
  valmax! : number

  calcular(){
    this.resultado = parseInt(this.banda1 + this.banda2) * Number(this.multi)
    this.valmen = this.resultado - (this.resultado * (this.resis/100))
    this.valmax = this.resultado + (this.resultado * (this.resis/100))
  }

  get_Band_Color(bandValue : string, hex : boolean = false) : string {
    var bv : number = Number(bandValue)
    for (var i = 0; i < colors.length; i++) {
        if (colors[i].band_value === bv || colors[i].multiplicator ===bv) {
            if (hex){
              return colors[i].hex
            } else {
              return colors[i].color
            }
        }
    }
    return 'white'
  }

  get_Resis_Color(bandValue : number, hex : boolean = false) : string {
    bandValue = Number(bandValue)
    for (var i = 0; i < resistencias.length; i++) {
        if (resistencias[i].tolerancia === bandValue) {
            if (hex){
              return resistencias[i].hex
            } else {
              return resistencias[i].color
            }
        }
    }
    return 'white'
  }
}
