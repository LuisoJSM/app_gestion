import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from '../../botones/botones.component';



@Component({
  selector: 'app-agregar-persona',
  imports: [CommonModule, ReactiveFormsModule, BotonesComponent],
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.scss'],
})
export class AgregarPersonaComponent {
  personaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
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
        alert('Persona agregada');
        this.router.navigate(['/personas']); // Redirigir a la lista de personas
      });
    } else {
      alert('¡Te faltan campos por completar!');
    }
  }
}
