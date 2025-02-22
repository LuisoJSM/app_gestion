import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicioApi } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-ingreso',
  imports: [CommonModule, ReactiveFormsModule], // ✅ Importamos módulos necesarios
  templateUrl: './agregar-ingreso.component.html',
  styleUrls: ['./agregar-ingreso.component.scss'],
})
export class AgregarIngresoComponent implements OnInit {
  formularioIngreso: FormGroup;
  listaPersonas: any[] = []; // ✅ Almacenamos las personas disponibles

  constructor(
    private fb: FormBuilder,
    private servicioApi: ServicioApi,
    private navegador: Router
  ) {
    this.formularioIngreso = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0.01)]],
      fuente: ['', Validators.required],
      persona_id: ['', Validators.required], // ✅ Campo para asociar el ingreso a una persona
    });
  }

  ngOnInit() {
    this.cargarPersonas(); // ✅ Cargar la lista de personas al iniciar el componente
  }

  cargarPersonas() {
    this.servicioApi.obtenerPersonas().subscribe(
      (personas) => {
        this.listaPersonas = personas; // ✅ Guardamos las personas en la lista
      },
      (error) => {
        console.error('Error al obtener personas:', error);
      }
    );
  }

  guardarIngreso() {
    if (this.formularioIngreso.valid) {
      this.servicioApi.agregarIngreso(this.formularioIngreso.value).subscribe(() => {
        alert('Ingreso registrado correctamente');
        this.navegador.navigate(['/ingresos']); // ✅ Redirigir a la lista de ingresos
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
