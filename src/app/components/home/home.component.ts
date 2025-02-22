import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from '../botones/botones.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BotonesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  botonesPersonas = [
    { texto: 'Lista de Personas', icono: 'bi-people', ruta: '/personas', estilo: 'btn-primary' },
    { texto: 'Agregar Persona', icono: 'bi-person-plus', ruta: '/personas/agregar', estilo: 'btn-success' }
  ];

  botonesIngresos = [
    { texto: 'Lista de Ingresos', icono: 'bi-cash-coin', ruta: '/ingresos', estilo: 'btn-info' },
    { texto: 'Agregar Ingreso', icono: 'bi-plus-circle', ruta: '/ingresos/agregar', estilo: 'btn-warning' }
  ];

  botonesGastos = [
    { texto: 'Lista de Gastos', icono: 'bi-cart-x', ruta: '/gastos', estilo: 'btn-danger' },
    { texto: 'Agregar Gasto', icono: 'bi-plus-circle', ruta: '/gastos/agregar', estilo: 'btn-secondary' }
  ];

  botonesBalance = [
    { texto: 'Ver Balance Financiero', icono: 'bi-bar-chart-line', ruta: '/balance', estilo: 'btn-dark' }
  ];
}
