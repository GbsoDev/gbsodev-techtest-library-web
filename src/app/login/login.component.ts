import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {  }
  usuario: Usuario = new Usuario;

  login() {
    this.authService.login(this.usuario).subscribe({
      next: (response: any) => {
        console.log('Autenticación exitosa');
        this.router.navigate(['/library']);
      },
      error: (error: any) => {
        console.log('Error al Autenticar', error);
      }
    });
  }
}
