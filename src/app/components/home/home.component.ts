import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from '../botones/botones.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BotonesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  botonesPersonas = [
    { texto: '📋 Listar Personas', ruta: '/personas', estilo: 'btn-primary' },
    { texto: '➕ Agregar Persona', ruta: '/personas/agregar', estilo: 'btn-success' }
  ];

  botonesIngresos = [
    { texto: '💰 Listar Ingresos', ruta: '/ingresos', estilo: 'btn-info' },
    { texto: '➕ Agregar Ingreso', ruta: '/ingresos/agregar', estilo: 'btn-warning' }
  ];

  botonesGastos = [
    { texto: '📉 Listar Gastos', ruta: '/gastos', estilo: 'btn-danger' },
    { texto: '➕ Agregar Gasto', ruta: '/gastos/agregar', estilo: 'btn-secondary' }
  ];
}
