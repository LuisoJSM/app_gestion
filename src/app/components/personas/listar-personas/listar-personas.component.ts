
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { BotonesComponent } from '../../botones/botones.component';


@Component({
  selector: 'app-listar-personas',
  imports: [CommonModule, RouterModule, BotonesComponent],
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.scss']
})
export class ListarPersonasComponent implements OnInit {
  personas: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this.apiService.obtenerPersonas().subscribe(
      (data) => {
        this.personas = data;
      },
      (error) => {
        console.error('Error al obtener personas', error);
      }
    );



  }


  eliminarPersona(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta persona?')) {
      this.apiService.eliminarPersona(id).subscribe(() => {
        alert('Persona eliminada correctamente');
        this.obtenerPersonas();
      });
    }
  }




}


