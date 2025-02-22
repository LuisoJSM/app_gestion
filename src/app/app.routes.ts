import { Routes } from '@angular/router';
import { ListarPersonasComponent } from './components/personas/listar-personas/listar-personas.component';
import { AgregarPersonaComponent } from './components/personas/agregar-persona/agregar-persona.component';
import { EditarPersonaComponent } from './components/personas/editar-persona/editar-persona.component';
import { HomeComponent } from './components/home/home.component'; // ✅ Importamos el nuevo componente


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personas', component: ListarPersonasComponent },
  { path: 'personas/agregar', component: AgregarPersonaComponent },
  { path: 'personas/editar/:id', component: EditarPersonaComponent },
];
