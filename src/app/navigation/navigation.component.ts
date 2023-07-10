import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private authService: AuthService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Verificar si el usuario ha iniciado sesión
  }

  logout(): void {
    this.authService.logout(); // Cerrar sesión
    this.router.navigate(['/login']);
  }
}
