import { Component } from '@angular/core';
import { Autor } from 'src/app/model/autor';
import { Editorial } from 'src/app/model/editorial';
import { Libro } from 'src/app/model/libro';
import { AutorService } from 'src/app/services/autor.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { LibroService } from 'src/app/services/libro.service';
import { BaseInModalForm } from 'src/app/shared/modal-form/base-in-modal-form';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.scss']
})
export class LibroFormComponent extends BaseInModalForm<number> {
  updating: boolean = false;

  libro: Libro = {
    autores: []
  };

  autores: Autor[] = [];
  editoriales: Editorial[] = [];

  constructor(
    private libroService: LibroService,
    private autorService: AutorService,
    private editorialService: EditorialService) {
    super();
  }

  protected override findObject(): void {
    this.loadAutores();
    this.loadEditoriales();
    // Lógica para cargar el libro
    if (this.selectedId != null) {
      console.log('consultando libro para actualizar')
      this.libroService.get(this.selectedId).subscribe(
        {
          next: (value: Libro) => {
            if (value != null) {
              this.libro = value;
            }
          },
          error: (error: any) => {
            console.log('Error al consultar libro', error);
          },
          complete: () => { }
        }
      );
      this.updating = true;
      this.title = 'Actualizar libr';
    }
    else {
      this.title = 'Registrar libro';
    }
  }

  private loadAutores(): void {
    // Lógica para cargar los autores
    console.log('consultando lista de autores')
    this.autorService.list().subscribe(
      {
        next: (value: Autor[]) => {
          this.autores = value;
        },
        error: (error: any) => {
          console.log('Error al cargar lista de autores', error);
        },
        complete: () => { }
      }
    );
  }

  private loadEditoriales(): void {
    // Lógica para cargar las editoriales
    console.log('consultando lista de editoriales')
    this.editorialService.list().subscribe(
      {
        next: (value: Editorial[]) => {
          this.editoriales = value;
        },
        error: (error: any) => {
          console.log('Error al cargar lista de editoriales', error);
        },
        complete: () => { }
      }
    );
  }

  protected override saveObject(): void {
    if (this.updating) {
      // Lógica para guardar el libro
      this.libroService.put(this.libro).subscribe(
        {
          next: (response: any) => {
            console.log('Libro guardado exitosamente');
            this.finalize();
          },
          error: (error: any) => {
            console.log('Error al guardar el libro', error);
          },
          complete: () => { }
        }
      );
    }
    else {
      // Lógica para guardar el libro
      this.libroService.post(this.libro).subscribe(
        {
          next: (response: any) => {
            console.log('Libro guardado exitosamente');
            this.finalize();
          },
          error: (error: any) => {
            console.log('Error al guardar el libro', error);
          },
          complete: () => { }
        }
      );
    }
  }

  protected autorsIsSelected(autor: Autor): boolean {
    if (this.libro.autores) {
      return this.autores.some(x => x.id === autor.id);
    }
    return false;
  }


  protected override clear(): void {
    this.selectedId = null;
    this.libro = {
      autores: []
    };
    this.updating = false;
    this.title = null;
  }
}
