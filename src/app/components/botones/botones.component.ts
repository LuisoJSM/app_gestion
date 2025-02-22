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
  @Input() botones!: { texto: string; icono: string, ruta: string; estilo: string }[]; //Lo que llevará cada botón. Es un array con los datos. Que iré recorriendo
}
