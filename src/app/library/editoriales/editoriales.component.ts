import { Component, OnInit } from '@angular/core';
import { Editorial } from 'src/app/model/editorial';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.scss']
})
export class EditorialesComponent implements OnInit {
  updating:boolean=false;
  watching:boolean=false;
  editoriales: Editorial[] = [];

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
        console.log(error);
      },
      complete: () => {}
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
}
