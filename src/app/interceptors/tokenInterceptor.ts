import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService= inject(AuthService);
    const token =  authService.getToken(); // Obtener el token del servicio de autenticación
    if (!request.url.includes('./assets/') && token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Añadir el token al encabezado de la solicitud
        }
      });
    }
    return next.handle(request);
  }
}
