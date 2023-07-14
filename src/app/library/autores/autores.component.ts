import { Component, OnInit, ViewChild } from '@angular/core';
import { Autor } from 'src/app/model/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  @ViewChild('formModal') modalRef: any;
  autores: Autor[] = [];
  formMode?: string;

  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.loadAutores();
  }

  loadAutores() {
    this.autorService.list().subscribe({
      next: (value: Autor[]) => {
        this.autores = value;
      },
      error: (error: any) => {
        console.log('Error al consultar autores', error);
      }
    });
  }

  deleteAutor(autor: Autor) {
    if (autor.id != null) {
      this.autorService.delete(autor.id).subscribe({
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

  closeModal() {
    this.loadAutores();
  }
}
