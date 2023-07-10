import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { AutoresComponent } from './autores/autores.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroDetailsComponent } from './libro-details/libro-details.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { EditorialDetailsComponent } from './editorial-details/editorial-details.component';
import { AutorDetailsComponent } from './autor-details/autor-details.component';
import { AutorFormComponent } from './autor-form/autor-form.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { EditorialFormComponent } from './editorial-form/editorial-form.component';
import { LibraryComponent } from './library.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutoresComponent,
    AutorDetailsComponent,
    LibrosComponent,
    LibroDetailsComponent,
    EditorialesComponent,
    EditorialDetailsComponent,
    AutorFormComponent,
    LibroFormComponent,
    EditorialFormComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LibraryRoutingModule
  ],
  providers: [
  ]
})
export class LibraryModule { }
