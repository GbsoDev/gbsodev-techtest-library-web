import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autor } from 'src/app/model/autor';
import { AutorService } from 'src/app/services/autor.service';
import { BaseInModalForm } from 'src/app/shared/modal-form/base-in-modal-form';

@Component({
  selector: 'app-autor-details',
  templateUrl: './autor-details.component.html',
  styleUrls: ['./autor-details.component.scss']
})
export class AutorDetailsComponent extends BaseInModalForm<number> {
  autor: Autor = {};

  constructor(private autorService: AutorService) {
    super();
  }

  protected override findObject(): void {
    this.title = 'Detalles de autor';
    if (this.selectedId != null) {
      this.autorService.get(this.selectedId!).subscribe({
        next: (value: Autor) => {
          if (value != null) {
            this.autor = value;
          }
        },
        error: (error: any) => {
          console.log('Error al cargar los detalles del autor', error);
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
    this.autor = {};
  }
}
