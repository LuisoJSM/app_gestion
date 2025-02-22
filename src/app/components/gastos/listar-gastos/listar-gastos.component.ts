import { Component, OnInit } from '@angular/core';
import { ServicioApi } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-gastos',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.scss'],
})
export class ListarGastosComponent implements OnInit {
  listaGastos: any[] = []; //almaceno los gastos

  constructor(private servicioApi: ServicioApi) {}

  ngOnInit() {
    this.cargarGastos(); //cargo los gastos cuando se inicia el componente
  }

  cargarGastos() {
    this.servicioApi.obtenerGastos().subscribe(
      (gastos) => {
        this.listaGastos = gastos; // meto los gsatos en la lista
      },
      (error) => {
        console.error('Error al obtener los gastos:', error);
      }
    );
  }

  eliminarGasto(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este gasto?')) {
      this.servicioApi.eliminarGasto(id).subscribe(() => {
        this.listaGastos = this.listaGastos.filter((gasto) => gasto.id !== id); //elimino los gastos de la lista

      });
    }
  }
}
