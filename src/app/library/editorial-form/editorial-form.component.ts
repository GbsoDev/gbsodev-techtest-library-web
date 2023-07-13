import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/model/editorial';
import { EditorialService } from 'src/app/services/editorial.service';
// import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.scss']
})
export class EditorialFormComponent implements OnInit {
  // @ViewChild('modalContent') modalRef!: NgbModalRef;
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  @Output() saved: EventEmitter<void> = new EventEmitter<void>();
  @Input('editorialId') editorialId?: number;
  // title?: string;
  editorial: Editorial = {};
  updating = false;

  constructor(
    private editorialService: EditorialService,
    private router: Router,
    // private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadEditorial();
  }

  loadEditorial() {
    // Lógica para cargar la editorial
    if (this.editorialId !== null) {
      this.editorialService.get(this.editorialId!).subscribe({
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
    if (this.editorialId !== null) {
      // Lógica para guardar la editorial actualizada
      this.editorialService.put(this.editorial).subscribe({
        next: (response: any) => {
          console.log('Editorial guardada exitosamente');
          // modalRef.dismiss();
          this.closed.emit();
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
          // this.modalRef.dismiss();
          this.closed.emit();
          this.router.navigate(['/editoriales']);
        },
        error: (error: any) => {
          console.log('Error al guardar la editorial', error);
        }
      });
    }
  }

  // openModal(formMode: string) {
  //   this.setTitle(formMode);
  //   this.modalRef = this.modalService.open(this.modalRef);
  // }

  closeModal() {
    // this.modalRef.close();
    this.closed.emit();
  }

  // setTitle(formMode: string) {
  //   switch (formMode) {
  //     case 'view':
  //       this.updating = false;
  //       break;
  //     case 'edit':
  //       this.updating = true;
  //       break;
  //     // default:
  //     //   this.title = 'Registrar editorial';
  //       // break;
  //   }
  // }
}
