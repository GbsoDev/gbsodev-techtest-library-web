import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { LibroDetailsComponent } from './libro-details/libro-details.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { AutoresComponent } from './autores/autores.component';
import { AutorDetailsComponent } from './autor-details/autor-details.component';
import { AutorFormComponent } from './autor-form/autor-form.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { EditorialDetailsComponent } from './editorial-details/editorial-details.component';
import { EditorialFormComponent } from './editorial-form/editorial-form.component';
import { LibraryComponent } from './library.component';

const routes: Routes = [
  {
    path: 'library/libros', component: LibrosComponent, children: [
      { path: ':id', component: LibroDetailsComponent }
    ]
  },
  {
    path: 'library/autores', component: AutoresComponent, children: [
      { path: ':id', component: AutorDetailsComponent }
    ]
  },
  {
    path: 'library/editoriales', component: EditorialesComponent, children: [
      { path: ':id', component: EditorialDetailsComponent }
    ]
  },
  { path: 'library/libro', component: LibroFormComponent },
  { path: 'library/autor', component: AutorFormComponent },
  { path: 'library/editorial', component: EditorialFormComponent },
  { path: 'library/libro/:id', component: LibroFormComponent },
  { path: 'library/autor/:id', component: AutorFormComponent },
  { path: 'library/editorial/:id', component: EditorialFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
