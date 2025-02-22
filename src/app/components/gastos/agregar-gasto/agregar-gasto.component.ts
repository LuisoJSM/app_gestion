import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-gasto',
  imports: [CommonModule, ReactiveFormsModule], // ✅ Importamos módulos necesarios
  templateUrl: './agregar-gasto.component.html',
  styleUrls: ['./agregar-gasto.component.scss'],
})
export class AgregarGastoComponent implements OnInit {
  formularioGasto: FormGroup;
  listaPersonas: any[] = []; // ✅ Almacenamos las personas disponibles

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private navegador: Router
  ) {
    this.formularioGasto = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0.01)]],
      categoria: ['', Validators.required],
      persona_id: ['', Validators.required], // ✅ Campo para asociar el gasto a una persona
    });
  }

  ngOnInit() {
    this.cargarPersonas(); // ✅ Cargar la lista de personas al iniciar el componente
  }

  cargarPersonas() {
    this.apiService.obtenerPersonas().subscribe(
      (personas) => {
        this.listaPersonas = personas; // ✅ Guardamos las personas en la lista
      },
      (error) => {
        console.error('Error al obtener personas:', error);
      }
    );
  }

  guardarGasto() {
    if (this.formularioGasto.valid) {
      this.apiService.agregarGasto(this.formularioGasto.value).subscribe(() => {
        alert('Gasto registrado correctamente');
        this.navegador.navigate(['/gastos']); // ✅ Redirigir a la lista de gastos
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
