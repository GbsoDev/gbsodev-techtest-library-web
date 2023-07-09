import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/model/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.scss']
})
export class AutorFormComponent implements OnInit {
  updating: boolean = false;

  autor: Autor = {};

  autorId!: number;

  constructor(
    private autorService: AutorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null && !isNaN(Number(idParam))) {
      this.autorId = Number(idParam);
      this.loadAutor();
      this.updating = true;
    }
  }

  loadAutor() {
    // Lógica para cargar el autor
    this.autorService.get(this.autorId).subscribe({
      next: (value: Autor) => {
        if (value != null) {
          this.autor = value;
        }
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {}
    });
  }

  saveAutor() {
    if (this.updating) {
      // Lógica para guardar el autor actualizado
      this.autorService.put(this.autor).subscribe({
        next: (response: any) => {
          console.log('Autor guardado exitosamente');
          this.router.navigate(['/autores']);
        },
        error: (error: any) => {
          console.log('Error al guardar el autor', error);
        }
      });
    } else {
      // Lógica para guardar el nuevo autor
      this.autorService.post(this.autor).subscribe({
        next: (response: any) => {
          console.log('Autor guardado exitosamente');
          this.router.navigate(['/autores']);
        },
        error: (error: any) => {
          console.log('Error al guardar el autor', error);
        }
      });
    }
  }
}
