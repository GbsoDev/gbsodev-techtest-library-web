import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Editorial } from 'src/app/model/editorial';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial-details',
  templateUrl: './editorial-details.component.html',
  styleUrls: ['./editorial-details.component.scss']
})
export class EditorialDetailsComponent {
  constructor(
    private editorialService: EditorialService,
    private route: ActivatedRoute
  ) {}

  editorialId!: number;
  editorial?: Editorial;

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null && !isNaN(Number(idParam))) {
      this.editorialId = Number(idParam);
      this.loadEditorial();
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
}
