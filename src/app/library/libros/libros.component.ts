import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  libros:Libro[]=[];

  constructor(private libroService: LibroService){}

  ngOnInit() {
    this.loadLibros();
  }

  loadLibros(){
    this.libroService.list().subscribe(
      {
        next: (value: Libro[]) => {
          this.libros = value;
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {

        }
      }
    )
  }

}
