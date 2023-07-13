import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Editorial } from 'src/app/model/editorial';
import { EditorialService } from 'src/app/services/editorial.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.scss']
})
export class EditorialFormComponent implements OnInit {
  editorial: Editorial = {};
  editorialId!: number;
  updating:boolean=false;
  constructor(
    private editorialService: EditorialService,
    private router: Router,
    private route: ActivatedRoute,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null && !isNaN(Number(idParam))) {
      this.editorialId = Number(idParam);
      this.loadEditorial();
      this.updating = true;
    }
  }

  loadEditorial() {
    // Lógica para cargar la editorial
    this.editorialService.get(this.editorialId).subscribe({
      next: (value: Editorial) => {
        if (value != null) {
          this.editorial = value;
        }
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {}
    });
  }

  saveEditorial() {
    if (this.editorialId) {
      // Lógica para guardar la editorial actualizada
      this.editorialService.put(this.editorial).subscribe({
        next: (response: any) => {
          console.log('Editorial guardada exitosamente');
          this.activeModal.dismiss();
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
          this.activeModal.dismiss();
          this.router.navigate(['/editoriales']);
        },
        error: (error: any) => {
          console.log('Error al guardar la editorial', error);
        }
      });
    }
  }

  closeModal(){
    this.activeModal.dismiss();
  }
}
