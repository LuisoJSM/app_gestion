import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BotonesComponent } from '../../botones/botones.component';


@Component({
  selector: 'app-listar-gastos',
  imports: [CommonModule, RouterModule, BotonesComponent],
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.scss'],
})
export class ListarGastosComponent implements OnInit {
  listaGastos: any[] = []; //almaceno los gastos

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cargarGastos(); //cargo los gastos cuando se inicia el componente
  }

  cargarGastos() {
    this.apiService.obtenerGastos().subscribe(
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
      this.apiService.eliminarGasto(id).subscribe(() => {
        this.listaGastos = this.listaGastos.filter((gasto) => gasto.id !== id); //elimino los gastos de la lista

      });
    }
  }
}
