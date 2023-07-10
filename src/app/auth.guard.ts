import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if (authService.isLoggedIn() && state.url !== '/login') {
    console.log('acceso consedido!')
    return true;
  }
  else {
    const router = inject(Router);
    router.navigate(['/login']);
    console.log('acceso consedido!')
    return false;
  }
};
