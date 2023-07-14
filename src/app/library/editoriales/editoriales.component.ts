import { Component, OnInit, ViewChild } from '@angular/core';
import { Editorial } from 'src/app/model/editorial';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.scss']
})
export class EditorialesComponent implements OnInit {
  @ViewChild('formModal') modalRef: any;
  editoriales: Editorial[] = [];
  selectedId?: number;
  formMode?: string;

  constructor(private editorialService: EditorialService) {}

  ngOnInit() {
    this.loadEditoriales();
  }

  loadEditoriales() {
    this.editorialService.list().subscribe({
      next: (value: Editorial[]) => {
        this.editoriales = value;
      },
      error: (error: any) => {
        console.log('Error al consultar editorial', error);
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

  closeModal() {
    this.loadEditoriales();
  }
}
