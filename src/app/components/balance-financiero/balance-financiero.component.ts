import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { BotonesComponent } from '../botones/botones.component';

@Component({
  selector: 'app-balance-financiero',
  imports: [CommonModule, BotonesComponent],
  templateUrl: './balance-financiero.component.html',
  styleUrls: ['./balance-financiero.component.scss'],
})
export class BalanceFinancieroComponent implements OnInit {
  balanceFinanciero: any[] = [];
  personas: any[] = [];
  ingresos: any[] = [];
  gastos: any[] = [];

  constructor(private servicioApi: ApiService) { }

  ngOnInit() {
    this.cargarPersonas();
  }

  cargarPersonas() {
    this.servicioApi.obtenerPersonas().subscribe({
      next: (datos) => {
        this.personas = datos;
        this.cargarIngresos();
      },
      error: (error) => {
        alert('Error al obtener personas');
        console.error(error);
      },
    });
  }

  cargarIngresos() {
    this.servicioApi.obtenerIngresos().subscribe({
      next: (datos) => {
        this.ingresos = datos;
        this.cargarGastos();
      },
      error: (error) => {
        alert('Error al obtener ingresos');
        console.error(error);
      },
    });
  }

  cargarGastos() {
    this.servicioApi.obtenerGastos().subscribe({
      next: (datos) => {
        this.gastos = datos;
        this.calcularBalance();
      },
      error: (error) => {
        alert('Error al obtener gastos');
        console.error(error);
      },
    });
  }

  calcularBalance() {
    this.balanceFinanciero = [];

    for (let persona of this.personas) {
      let totalIngresos = 0;
      let totalGastos = 0;

      for (let ingreso of this.ingresos) {
        if (ingreso.persona_id === persona.id) {
          totalIngresos += ingreso.monto;
        }
      }

      for (let gasto of this.gastos) {
        if (gasto.persona_id === persona.id) {
          totalGastos += gasto.monto;
        }
      }

      let saldo = totalIngresos - totalGastos;

      this.balanceFinanciero.push({
        id: persona.id,
        nombre: persona.nombre,
        apellido: persona.apellido,
        totalIngresos: totalIngresos,
        totalGastos: totalGastos,
        saldo: saldo,
      });
    }
  }
}
