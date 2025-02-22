import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioApi } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-persona',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ Importamos módulos necesarios
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.scss'],
})
export class EditarPersonaComponent implements OnInit {
  formularioPersona: FormGroup;
  idPersona!: number; // ✅ Guardamos el ID de la persona a editar

  constructor(
    private fb: FormBuilder,
    private servicioApi: ServicioApi,
    private ruta: ActivatedRoute,
    private navegador: Router
  ) {
    this.formularioPersona = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.idPersona = Number(this.ruta.snapshot.paramMap.get('id')); // ✅ Obtener el ID desde la URL
    this.servicioApi.obtenerPersonaPorId(this.idPersona).subscribe((datos) => {
      this.formularioPersona.patchValue(datos); // ✅ Rellenamos el formulario con los datos obtenidos
    });
  }

  guardarCambios() {
    if (this.formularioPersona.valid) {
      this.servicioApi.actualizarPersona(this.idPersona, this.formularioPersona.value).subscribe(() => {
        alert('Persona actualizada correctamente');
        this.navegador.navigate(['/personas']); // ✅ Redirigir a la lista de personas
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
