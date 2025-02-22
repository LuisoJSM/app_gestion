import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApi {  // ✅ Cambiamos el nombre de la clase
  constructor(private http: HttpClient, @Inject('API_URL') private urlApi: string) {} // ✅ También renombramos apiUrl a urlApi

  // Obtener todas las personas
  obtenerPersonas(): Observable<any> {
    return this.http.get(`${this.urlApi}/personas`);
  }

  // Obtener una persona por ID
  obtenerPersonaPorId(id: number): Observable<any> {
    return this.http.get(`${this.urlApi}/personas/${id}`);
  }

  // Agregar una nueva persona
  agregarPersona(persona: any): Observable<any> {
    return this.http.post(`${this.urlApi}/personas`, persona);
  }

  // Actualizar una persona por ID
  actualizarPersona(id: number, persona: any): Observable<any> {
    return this.http.put(`${this.urlApi}/personas/${id}`, persona);
  }

  // Eliminar una persona por ID
  eliminarPersona(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/personas/${id}`);
  }
}
