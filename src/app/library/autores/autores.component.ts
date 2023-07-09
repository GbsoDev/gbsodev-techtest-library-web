import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/model/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  autores: Autor[] = [];

  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.loadAutores();
  }

  loadAutores() {
    this.autorService.list().subscribe(
      {
        next: (value: Autor[]) => {
          this.autores = value;
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {

        }
      }
    );
  }
  deleteAutor(autor: Autor) {
    this.autorService.delete(autor.id!).subscribe({
      next: (response: any) => {
        console.log('Autor eliminado');
        this.loadAutores();
      },
      error: (error: any) => {
        console.log('Error al eliminar autor', error);
      }
    });
  }
}
