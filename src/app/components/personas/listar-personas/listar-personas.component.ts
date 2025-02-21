
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router'; // ✅ Importar RouterModule

@Component({
  selector: 'app-listar-personas',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Agregar RouterModule aquí
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.scss']
})
export class ListarPersonasComponent implements OnInit {
  personas: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this.apiService.getPersonas().subscribe(
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
      this.apiService.deletePersona(id).subscribe(() => {
        alert('Persona eliminada correctamente');
        this.obtenerPersonas(); // ✅ Recargar la lista después de eliminar
      });
    }
  }




}


