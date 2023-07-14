import { Component } from '@angular/core';
import { Autor } from 'src/app/model/autor';
import { AutorService } from 'src/app/services/autor.service';
import { BaseInModalForm } from 'src/app/shared/modal-form/base-in-modal-form';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.scss']
})
export class AutorFormComponent extends BaseInModalForm<number> {
  autor: Autor = {};
  updating: boolean = false;

  constructor(private autorService: AutorService) {
    super();
  }

  protected override findObject() {
    // Lógica para cargar el autor
    if (this.selectedId != null) {
      console.log('consultando autor para actualizar')
      this.autorService.get(this.selectedId!).subscribe({
        next: (value: Autor) => {
          if (value != null) {
            this.autor = value;
          }
        },
        error: (error: any) => {
          console.log('Error al consultar autor', error);
        },
        complete: () => { }
      });
      this.updating = true;
      this.title = 'Actualizar libro';
    } else {
      this.title = 'Registrar editorial';
    }
  }

  saveObject() {
    if (this.updating) {
      // Lógica para guardar el autor actualizado
      this.autorService.put(this.autor).subscribe({
        next: (response: any) => {
          console.log('Autor guardado exitosamente');
          this.finalize();
        },
        error: (error: any) => {
          console.log('Error al guardar el autor', error);
        },
        complete: () => { }
      });
    } else {
      // Lógica para guardar el nuevo autor
      this.autorService.post(this.autor).subscribe({
        next: (response: any) => {
          console.log('Autor guardado exitosamente');
          this.finalize();
        },
        error: (error: any) => {
          console.log('Error al guardar el autor', error);
        },
        complete: () => { }
      });
    }
  }

  protected override clear(): void {
    this.selectedId = null;
    this.autor = {};
    this.updating = false;
    this.title = null;
  }
}
