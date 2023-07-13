import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/model/editorial';
import { EditorialService } from 'src/app/services/editorial.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.scss']
})
export class EditorialFormComponent implements OnInit {
  @ViewChild('modalContent') modalRef!: NgbModalRef;
  @Output() modalClosed: EventEmitter<void> = new EventEmitter<void>();
  @Input('editorialId') editorialId?: number;
  title?: string;
  editorial: Editorial = {};
  updating = false;

  constructor(
    private editorialService: EditorialService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadEditorial();
  }

  loadEditorial() {
    // Lógica para cargar la editorial
    if (this.editorialId !== undefined && !isNaN(Number(this.editorialId))) {
      this.editorialService.get(this.editorialId ?? 0).subscribe({
        next: (value: Editorial) => {
          if (value != null) {
            this.editorial = value;
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => { }
      });
      this.updating = true;
    }
  }

  saveEditorial() {
    if (this.editorialId) {
      // Lógica para guardar la editorial actualizada
      this.editorialService.put(this.editorial).subscribe({
        next: (response: any) => {
          console.log('Editorial guardada exitosamente');
          this.modalRef.dismiss();
          this.router.navigate(['/editoriales']);
        },
        error: (error: any) => {
          console.log('Error al guardar la editorial', error);
        }
      });
    } else {
      // Lógica para guardar la nueva editorial
      this.editorialService.post(this.editorial).subscribe({
        next: (response: any) => {
          console.log('Editorial guardada exitosamente');
          this.modalRef.dismiss();
          this.router.navigate(['/editoriales']);
        },
        error: (error: any) => {
          console.log('Error al guardar la editorial', error);
        }
      });
    }
  }

  openModal(formMode: string) {
    this.setTitle(formMode);
    this.modalRef = this.modalService.open(this.modalRef);
  }

  closeModal() {
    this.modalRef.close();
    this.modalClosed.emit();
  }

  setTitle(formMode: string) {
    switch (formMode) {
      case 'view':
        this.title = 'Detalles de editorial';
        break;
      case 'edit':
        this.title = 'Editar editorial';
        break;
      default:
        this.title = 'Registrar editorial';
        break;
    }
  }
}
