import { Component } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { LibroService } from 'src/app/services/libro.service';
import { BaseInModalForm } from 'src/app/shared/modal-form/base-in-modal-form';

@Component({
  selector: 'app-libro-details',
  templateUrl: './libro-details.component.html',
  styleUrls: ['./libro-details.component.scss']
})
export class LibroDetailsComponent extends BaseInModalForm<number> {
  libro?: Libro | null = {
    autores: []
  };

  constructor(private libroService: LibroService) {
    super();
  }

  protected override findObject(): void {
    this.title = 'Detalles de libro';
    if (this.selectedId != null) {
      this.libroService.get(this.selectedId).subscribe({
        next: (value: Libro) => {
          if (value != null) {
            this.libro = value;
          }
        },
        error: (error: any) => {
          console.log('Error al cargar los detalles del libro', error);
        },
        complete: () => { }
      });
    }
    else { }
  }

  protected override saveObject(): void {
    throw new Error('Method not implemented.');
  }

  protected override clear(): void {
    this.libro = {
      autores: []
    };
  }
}
