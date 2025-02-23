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
  listaPersonas: any[] = [];
  idGasto!: number;

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
      persona_id: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.idGasto = Number(this.ruta.snapshot.paramMap.get('id'));
    this.cargarPersonas();
    this.cargarGasto();
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

  cargarGasto() {
    this.apiService.obtenerGastoPorId(this.idGasto).subscribe(
      (gasto) => {
        this.formularioGasto.patchValue(gasto);
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
        this.navegador.navigate(['/gastos']);
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
