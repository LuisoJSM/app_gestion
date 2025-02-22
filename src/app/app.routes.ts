import { Routes } from '@angular/router';

//Componentes de PERSONA
import { ListarPersonasComponent } from './components/personas/listar-personas/listar-personas.component';
import { AgregarPersonaComponent } from './components/personas/agregar-persona/agregar-persona.component';
import { EditarPersonaComponent } from './components/personas/editar-persona/editar-persona.component';

//Componente de la home
import { HomeComponent } from './components/home/home.component';


//Componentes de INGRESOS
import { ListarIngresosComponent } from './components/ingresos/listar-ingresos/listar-ingresos.component';
import { AgregarIngresoComponent } from './components/ingresos/agregar-ingreso/agregar-ingreso.component';
import { EditarIngresoComponent } from './components/ingresos/editar-ingreso/editar-ingreso.component';


export const routes: Routes = [
  //Ruta de la Home
  { path: '', component: HomeComponent },
  //Rutas de Personas
  { path: 'personas', component: ListarPersonasComponent },
  { path: 'personas/agregar', component: AgregarPersonaComponent },
  { path: 'personas/editar/:id', component: EditarPersonaComponent },


//Rutas de ingresos
  { path: 'ingresos', component: ListarIngresosComponent },
  { path: 'ingresos/agregar', component: AgregarIngresoComponent },
  { path: 'ingresos/editar/:id', component: EditarIngresoComponent },


];
