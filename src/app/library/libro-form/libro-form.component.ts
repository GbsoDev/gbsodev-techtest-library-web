import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/model/autor';
import { Editorial } from 'src/app/model/editorial';
import { Libro } from 'src/app/model/libro';
import { AutorService } from 'src/app/services/autor.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.scss']
})
export class LibroFormComponent implements OnInit {
  updating: boolean = false;

  libro: Libro = {
    autores: []
  };

  autores: Autor[] = [];
  editoriales: Editorial[] = [];
  libroId!: number;

  constructor(
    private libroService: LibroService,
    private autorService: AutorService,
    private editorialService: EditorialService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null && !isNaN(Number(idParam))) {
      this.libroId = Number(idParam);
      this.loadLibro()
      this.updating = true;
    }
    // Carga los autores necesarios para la lista desplegable
    this.loadAutores();
    this.loadEditoriales();
  }

  loadLibro() {
    // Lógica para cargar el libro
    this.libroService.get(this.libroId).subscribe(
      {
        next: (value: Libro) => {
          if(value != null){
            this.libro = value;
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {

        }
      }
    );
  }

  loadAutores() {
    // Lógica para cargar los autores
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

  loadEditoriales() {
    // Lógica para cargar las editoriales
    this.editorialService.list().subscribe(
      {
        next: (value: Editorial[]) => {
          this.editoriales = value;
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {

        }
      }
    );
  }

  saveLibro() {
    if (this.updating) {
      // Lógica para guardar el libro
      this.libroService.put(this.libro).subscribe(
        {
          next: (response: any) => {
            console.log('Libro guardado exitosamente');
            this.router.navigate(['/libros'])
          },
          error: (error: any) => {
            console.log('Error al guardar el libro', error);
          }
        }
      );
    }
    else {
      // Lógica para guardar el libro
      this.libroService.post(this.libro).subscribe(
        {
          next: (response: any) => {
            console.log('Libro guardado exitosamente');
            this.router.navigate(['/libros'])
          },
          error: (error: any) => {
            console.log('Error al guardar el libro', error);
          }
        }
      );
    }
  }

  autorsIsSelected(autor: Autor): boolean {
    if (this.libro.autores) {
      return this.autores.some(x=> x.id === autor.id);
    }
    return false;
  }
}
