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

const routes: Routes = [
  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  {
    path: 'libros', component: LibrosComponent, children: [
      { path: ':id', component: LibroDetailsComponent }
    ]
  },
  {
    path: 'autores', component: AutoresComponent, children: [
      { path: ':id', component: AutorDetailsComponent }
    ]
  },
  {
    path: 'editoriales', component: EditorialesComponent, children: [
      { path: ':id', component: EditorialDetailsComponent }
    ]
  },
  { path: 'libro', component: LibroFormComponent },
  { path: 'autor', component: AutorFormComponent },
  { path: 'editorial', component: EditorialFormComponent },
  { path: 'libro/:id', component: LibroFormComponent },
  { path: 'autor/:id', component: AutorFormComponent },
  { path: 'editorial/:id', component: EditorialFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
