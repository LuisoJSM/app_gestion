import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // ✅ Importar ReactiveFormsModule
import { ServicioApi } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-persona',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ Agregar ReactiveFormsModule aquí
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.scss'],
})
export class AgregarPersonaComponent {
  personaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ServicioApi,
    private router: Router
  ) {
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.personaForm.valid) {
      this.apiService.agregarPersona(this.personaForm.value).subscribe(() => {
        alert('Persona agregada exitosamente');
        this.router.navigate(['/personas']); // Redirigir a la lista de personas
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
