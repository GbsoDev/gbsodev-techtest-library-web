import { Component, OnInit } from '@angular/core';
import { Editorial } from 'src/app/model/editorial';
import { EditorialService } from 'src/app/services/editorial.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.scss']
})
export class EditorialesComponent implements OnInit {
  editoriales: Editorial[] = [];
  formMode?:string|null;
  constructor(private editorialService: EditorialService, private modalService: NgbModal) {}

  ngOnInit() {
    this.loadEditoriales();
  }

  loadEditoriales() {
    this.editorialService.list().subscribe({
      next: (value: Editorial[]) => {
        this.editoriales = value;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  deleteEditorial(editorial: Editorial) {
    if (editorial.id != null) {
      this.editorialService.delete(editorial.id).subscribe({
        next: (response: any) => {
          console.log('Editorial eliminada');
          this.loadEditoriales();
        },
        error: (error: any) => {
          console.log('Error al eliminar editorial', error);
        }
      });
    }
  }

  openModal(content: any, formMode: string) {
    this.formMode = formMode;
    this.modalService.open(content, { ariaLabelledBy: 'modalbasictitle' });
  }
}
