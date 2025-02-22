import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from '../../botones/botones.component';


@Component({
  selector: 'app-editar-gasto',
  imports: [CommonModule, ReactiveFormsModule, BotonesComponent],
  templateUrl: './editar-gasto.component.html',
  styleUrls: ['./editar-gasto.component.scss'],
})
export class EditarGastoComponent implements OnInit {
  formularioGasto: FormGroup;
  listaPersonas: any[] = []; // ✅ Lista de personas disponibles
  idGasto!: number; // ✅ ID del gasto que se va a editar

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private ruta: ActivatedRoute,
    private navegador: Router
  ) {
    this.formularioGasto = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0.01)]],
      categoria: ['', Validators.required],
      persona_id: ['', Validators.required], // ✅ Persona a la que pertenece el gasto
    });
  }

  ngOnInit() {
    this.idGasto = Number(this.ruta.snapshot.paramMap.get('id')); // ✅ Obtener ID del gasto desde la URL
    this.cargarPersonas(); // ✅ Cargar lista de personas
    this.cargarGasto(); // ✅ Cargar datos del gasto
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

  cargarGasto() {
    this.apiService.obtenerGastoPorId(this.idGasto).subscribe(
      (gasto) => {
        this.formularioGasto.patchValue(gasto); // ✅ Llenamos el formulario con los datos obtenidos
      },
      (error) => {
        console.error('Error al obtener el gasto:', error);
      }
    );
  }

  guardarCambios() {
    if (this.formularioGasto.valid) {
      this.apiService.actualizarGasto(this.idGasto, this.formularioGasto.value).subscribe(() => {
        alert('Gasto actualizado correctamente');
        this.navegador.navigate(['/gastos']); // ✅ Redirigir a la lista de gastos
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
