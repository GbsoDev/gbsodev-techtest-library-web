import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Usuario } from '../model/usuario';
import { AuthResponse } from '../model/auth-response';
import { environment } from 'src/environments/environment';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<Usuario, number>{
  override endpoint: string = 'auth';

  login(usuario: Usuario): Observable<any> {
    const url = this.buildUrl();
    return this.httpClient.post<AuthResponse>(url, usuario).pipe(
      tap((authResponse: AuthResponse) => {
        this.setToken(authResponse);
        console.log('Autenticación exitosa');
      }),
      catchError((error: any) => {
        console.log('Error al autenticar', error);
        throw error;
      })
    );
  }

  setToken(authResponse: AuthResponse): void {
    // Guardar el token en localStorage
    localStorage.setItem(environment.tokenKey, authResponse.token);
    localStorage.setItem(environment.tokenExpireKey, authResponse.expireAt.toString());
  }

  isLoggedIn(): boolean {
     // Verificar si existe un token en localStorage
    return !!this.getToken();
  }

  logout(): void {
    // Eliminar el token de localStorage al cerrar sesión
    localStorage.removeItem(environment.tokenKey);
    localStorage.removeItem(environment.tokenExpireKey);
  }
}
