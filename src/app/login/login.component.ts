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
  constructor(private autService: AuthService, private router: Router,){

  }
  usuario: Usuario = new Usuario;

  login() {
      this.autService.post(this.usuario).subscribe({
        next: (response: any) => {
          console.log('Autor guardado exitosamente');
          this.router.navigate(['/library']);
        },
        error: (error: any) => {
          console.log('Error al guardar el autor', error);
        }
      });
  }
}
