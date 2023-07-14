import { Component } from '@angular/core';
import { Editorial } from 'src/app/model/editorial';
import { EditorialService } from 'src/app/services/editorial.service';
import { BaseInModalForm } from 'src/app/shared/modal-form/base-in-modal-form';

@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.scss']
})
export class EditorialFormComponent extends BaseInModalForm<number>{
  editorial: Editorial = {};
  updating = false;

  constructor(private editorialService: EditorialService) {
    super();
  }

  protected override findObject(): void {
    // Lógica para cargar la editorial
    if (this.selectedId != null) {
      console.log('consultando editorial para actualizar')
      this.editorialService.get(this.selectedId!).subscribe({
        next: (value: Editorial) => {
          if (value != null) {
            this.editorial = value;
          }
        },
        error: (error: any) => {
          console.log('Error al consultar editorial', error);
        },
        complete: () => { }
      });
      this.updating = true;
      this.title = 'Actualizar editorial';
    }
    else {
      this.title = 'Registrar editorial';
    }
  }

  protected override saveObject(): void {
    if (this.updating) {
      // Lógica para guardar la editorial actualizada
      this.editorialService.put(this.editorial).subscribe({
        next: (response: any) => {
          console.log('Editorial guardada exitosamente');
          this.finalize();
        },
        error: (error: any) => {
          console.log('Error al guardar la editorial', error);
        },
        complete: () => { }
      });
    } else {
      // Lógica para guardar la nueva editorial
      this.editorialService.post(this.editorial).subscribe({
        next: (response: any) => {
          console.log('Editorial guardada exitosamente');
          this.finalize();
        },
        error: (error: any) => {
          console.log('Error al guardar la editorial', error);
        },
        complete: () => { }
      });
    }
  }

  protected override clear(): void {
    this.selectedId = null;
    this.editorial = {};
    this.updating = false;
    this.title = null;
  }
}
