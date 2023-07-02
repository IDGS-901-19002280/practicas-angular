

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  cineForm: FormGroup;
  nombreCliente: string = '';
  cantidadBoletos: number = 0;
  usarTarjeta: boolean = false;
  valorPagar: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.cineForm = this.formBuilder.group({
      nombreCliente: ['', Validators.required],
      cantidadBoletos: ['', [Validators.required, Validators.max(7)]],
      usarTarjeta: [false]
    });
  }

  calcularValorPagar() {
    const precioBoleto = 12;
    const cantidad = this.cineForm.get('cantidadBoletos')?.value;
    const usarTarjeta = this.cineForm.get('usarTarjeta')?.value;
    const nombreCliente = this.cineForm.get('nombreCliente')?.value;


    let valorPagar = precioBoleto * cantidad;

    if (cantidad > 7) {
      // Mostrar mensaje de error o realizar alguna acción
      console.log('Error: La cantidad de boletos no puede ser mayor a 7');
      return;
    }
    if (cantidad > 5) {
      const descuento = valorPagar * 0.15; // Descuento del 15%
      valorPagar -= descuento;
    } else if (cantidad >= 3 && cantidad <= 5) {
      const descuento = valorPagar * 0.1; // Descuento del 10%
      valorPagar -= descuento;
    }

    if (usarTarjeta) {
      const descuento = valorPagar * 0.1; // Descuento adicional del 10% por usar la tarjeta
      valorPagar -= descuento;
    }

    this.valorPagar = valorPagar;

    // Agregar los datos de la venta al arreglo 'ventas'
    const venta = {
      nombreCliente: nombreCliente,
      cantidadBoletos: cantidad,
      usarTarjeta: usarTarjeta,
      valorPagar: this.valorPagar
    };
    this.ventas.push(venta);
  }

  ventas: any[] = [];


}
