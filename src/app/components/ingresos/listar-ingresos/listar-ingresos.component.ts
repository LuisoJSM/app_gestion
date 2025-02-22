import { Component, OnInit } from '@angular/core';
import { ServicioApi } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-ingresos',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-ingresos.component.html',
  styleUrls: ['./listar-ingresos.component.scss'],
})

export class ListarIngresosComponent implements OnInit {
  listaIngresos: any[] = [];

  constructor(private servicioApi: ServicioApi) {}

  ngOnInit() {
    this.cargarIngresos();
  }


  cargarIngresos() {
    this.servicioApi.obtenerIngresos().subscribe(
      (ingresos) => {
        this.listaIngresos = ingresos;
      },
      (error) => {
        console.error('Error al obtener los ingresos:', error);
      }
    );
  }

  eliminarIngreso(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este ingreso?')) {
      this.servicioApi.eliminarIngreso(id).subscribe(() => {
        this.listaIngresos = this.listaIngresos.filter((ingreso) => ingreso.id !== id);
      });
    }
  }


}
