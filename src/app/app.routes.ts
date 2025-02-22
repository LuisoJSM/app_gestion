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


//Componentes de GASTOS
import { ListarGastosComponent } from './components/gastos/listar-gastos/listar-gastos.component';
import { AgregarGastoComponent } from './components/gastos/agregar-gasto/agregar-gasto.component';
import { EditarGastoComponent } from './components/gastos/editar-gasto/editar-gasto.component';



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



//Rutas de Gastos

  { path: 'gastos', component: ListarGastosComponent },
  { path: 'gastos/agregar', component: AgregarGastoComponent },
  { path: 'gastos/editar/:id', component: EditarGastoComponent },


];
