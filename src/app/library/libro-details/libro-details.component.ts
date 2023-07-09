import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/model/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-details',
  templateUrl: './libro-details.component.html',
  styleUrls: ['./libro-details.component.scss']
})
export class LibroDetailsComponent implements OnInit  {
  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute){
  }
  libroId!:number;
  libro?:Libro;

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null && !isNaN(Number(idParam))) {
      this.libroId = Number(idParam);
      this.loadLibro()
    }
  }

  loadLibro() {
    // Lógica para cargar el libro
    this.libroService.get(this.libroId).subscribe(
      {
        next: (value: Libro) => {
          if(value != null){
            this.libro = value;
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
