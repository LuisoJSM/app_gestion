import { Routes } from '@angular/router';
import { ListarPersonasComponent } from './components/personas/listar-personas/listar-personas.component';
import { AgregarPersonaComponent } from './components/personas/agregar-persona/agregar-persona.component';

export const routes: Routes = [
  { path: 'personas', component: ListarPersonasComponent },
  { path: 'personas/agregar', component: AgregarPersonaComponent }, // ✅ Nueva ruta para agregar personas
];
