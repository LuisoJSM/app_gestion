import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-ingreso',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-ingreso.component.html',
  styleUrls: ['./editar-ingreso.component.scss'],
})
export class EditarIngresoComponent implements OnInit {
  formularioIngreso: FormGroup;
  listaPersonas: any[] = [];
  idIngreso!: number; // Id del ingreso que quiero editar

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private ruta: ActivatedRoute,
    private navegador: Router
  ) {
    this.formularioIngreso = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0.01)]],
      fuente: ['', Validators.required],
      persona_id: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.idIngreso = Number(this.ruta.snapshot.paramMap.get('id')); // Obtengo id del ingreso desde la URL
    this.cargarPersonas(); // Cargo lista de personas
    this.cargarIngreso(); // Cargo datos de ingreso
  }

  cargarPersonas() {
    this.apiService.obtenerPersonas().subscribe(
      (personas) => {
        this.listaPersonas = personas;
      },
      (error) => {
        console.error('Error al obtener personas:', error);
      }
    );
  }

  cargarIngreso() {
    this.apiService.obtenerIngresoPorId(this.idIngreso).subscribe(
      (ingreso) => {
        this.formularioIngreso.patchValue(ingreso);
      },
      (error) => {
        console.error('Error al obtener el ingreso:', error);
      }
    );
  }

  guardarCambios() {
    if (this.formularioIngreso.valid) {
      this.apiService.actualizarIngreso(this.idIngreso, this.formularioIngreso.value).subscribe(() => {
        alert('Ingreso actualizado correctamente');
        this.navegador.navigate(['/ingresos']);
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
