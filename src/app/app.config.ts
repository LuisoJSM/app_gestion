import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  // ✅ Importar HttpClient

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()), // ✅ Mantener el enrutamiento
    provideHttpClient()  // ✅ Agregar HttpClient para que ApiService funcione
  ],
};
