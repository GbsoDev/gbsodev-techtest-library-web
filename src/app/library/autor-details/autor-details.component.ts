import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autor } from 'src/app/model/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-details',
  templateUrl: './autor-details.component.html',
  styleUrls: ['./autor-details.component.scss']
})
export class AutorDetailsComponent {
  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute) {
  }

  autorId!: number;
  autor?:Autor;

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null && !isNaN(Number(idParam))) {
      this.autorId = Number(idParam);
      this.loadAutor()
    }
  }

  loadAutor() {
    // Lógica para cargar el autor
    this.autorService.get(this.autorId).subscribe(
      {
        next: (value: Autor) => {
          if (value != null) {
            this.autor = value;
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {

        }
      }
    );
  }
}
