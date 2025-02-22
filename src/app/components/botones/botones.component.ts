import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss'],
})
export class BotonesComponent {
  @Input() titulo!: string; // Aqui puedo poner el título de la seccion
  @Input() botones!: { texto: string; ruta: string; estilo: string }[]; //Lo que llevará cada botón. Es un array con los datos. Que iré recorriendo
}
