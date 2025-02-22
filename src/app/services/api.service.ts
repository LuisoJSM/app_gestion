import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string) {} //Aquí viene inyectada la api desde app.config.ts

  // Obtener todas las personas
  getPersonas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/personas`);
  }

  // Eliminar una persona por ID
  deletePersona(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/personas/${id}`);
  }

  // Agregar una nueva persona
  addPersona(persona: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/personas`, persona);
  }
}
