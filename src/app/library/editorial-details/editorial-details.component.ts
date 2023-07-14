import { Component } from '@angular/core';
import { Editorial } from 'src/app/model/editorial';
import { EditorialService } from 'src/app/services/editorial.service';
import { BaseInModalForm } from 'src/app/shared/modal-form/base-in-modal-form';

@Component({
  selector: 'app-editorial-details',
  templateUrl: './editorial-details.component.html',
  styleUrls: ['./editorial-details.component.scss']
})
export class EditorialDetailsComponent extends BaseInModalForm<number> {
  editorial: Editorial = {};

  constructor(private editorialService: EditorialService) {
    super();
  }

  protected override findObject(): void {
    // Lógica para cargar la editorial
    this.title = 'Detalles de editorial';
    if (this.selectedId != null) {
      this.editorialService.get(this.selectedId!).subscribe({
        next: (value: Editorial) => {
          if (value != null) {
            this.editorial = value;
          }
        },
        error: (error: any) => {
          console.log('Error al cargar los detalles de la editorial', error);
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
    this.editorial = {};
  }
}
