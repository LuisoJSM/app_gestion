import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';  // ✅ Importación correcta

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Obtener todas las personas
  getPersonas(): Observable<any> {
    return this.http.get(`${API_URL}/personas`);
  }

// Eliminar una persona por ID
deletePersona(id: number): Observable<any> {
  return this.http.delete(`${API_URL}/personas/${id}`);
}


// Agregar una nueva persona
addPersona(persona: any): Observable<any> {
  return this.http.post(`${API_URL}/personas`, persona);
}




}
