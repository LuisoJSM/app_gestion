import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from '../../botones/botones.component';


@Component({
  selector: 'app-editar-persona',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BotonesComponent],
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.scss'],
})
export class EditarPersonaComponent implements OnInit {
  formularioPersona: FormGroup;
  idPersona!: number; // Aquí guardo el id de la persona a ediatr

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
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
    this.idPersona = Number(this.ruta.snapshot.paramMap.get('id')); //Aqui es donde oibtengo el id
    this.apiService.obtenerPersonaPorId(this.idPersona).subscribe((datos) => {
      this.formularioPersona.patchValue(datos); // Relleno con los datos que obtengo
    });
  }

  guardarCambios() {
    if (this.formularioPersona.valid) {
      this.apiService.actualizarPersona(this.idPersona, this.formularioPersona.value).subscribe(() => {
        alert('Persona actualizada');
        this.navegador.navigate(['/personas']); // Redirigir al listado de personas
      });
    } else {
      alert('¡Te faltan campo que completar!');
    }
  }
}
