import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, @Inject('API_URL') private urlApi: string) {}




//SERVICIOS DE PERSONAS
  // Obtener todas las personas
  obtenerPersonas(): Observable<any> {
    return this.http.get(`${this.urlApi}/personas`);
  }
  // Obtener una persona por ID
  obtenerPersonaPorId(id: number): Observable<any> {
    return this.http.get(`${this.urlApi}/personas/${id}`);
  }
  // Agregar persona
  agregarPersona(persona: any): Observable<any> {
    return this.http.post(`${this.urlApi}/personas`, persona);
  }
  // Actualizar persona sbaiendo su id
  actualizarPersona(id: number, persona: any): Observable<any> {
    return this.http.put(`${this.urlApi}/personas/${id}`, persona);
  }
  // Eliminar persona pro ID
  eliminarPersona(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/personas/${id}`);
  }




  //SERVICIOS DE INGRESOS

// Obtener todos los ingresos
obtenerIngresos(): Observable<any> {
  return this.http.get(`${this.urlApi}/ingresos`);
}

//Ingresos por ID
obtenerIngresoPorId(id: number): Observable<any> {
  return this.http.get(`${this.urlApi}/ingresos/${id}`);
}

// Agregar un nuevo ingreso
agregarIngreso(ingreso: any): Observable<any> {
  return this.http.post(`${this.urlApi}/ingresos`, ingreso);
}

//actualizar un ingreso por Is
actualizarIngreso(id: number, ingreso: any): Observable<any> {
  return this.http.put(`${this.urlApi}/ingresos/${id}`, ingreso);
}

//Eliminar ingreso por id
eliminarIngreso(id: number): Observable<any> {
  return this.http.delete(`${this.urlApi}/ingresos/${id}`);
}







  //SERVICIOS DE GASTOS

// Obtener todos los gastos
obtenerGastos(): Observable<any> {
  return this.http.get(`${this.urlApi}/gastos`);
}

//Gasto por ID
obtenerGastoPorId(id: number): Observable<any> {
  return this.http.get(`${this.urlApi}/gastos/${id}`);
}

//Nuevo gasto
agregarGasto(gasto: any): Observable<any> {
  return this.http.post(`${this.urlApi}/gastos`, gasto);
}

//actualizar gasto
actualizarGasto(id: number, gasto: any): Observable<any> {
  return this.http.put(`${this.urlApi}/gastos/${id}`, gasto);
}

// eliminar gasto por id
eliminarGasto(id: number): Observable<any> {
  return this.http.delete(`${this.urlApi}/gastos/${id}`);
}







}
