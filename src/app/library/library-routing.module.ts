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
import { authGuard as AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'libros', component: LibrosComponent, children: [
      { path: 'libro', component: LibroFormComponent },
      { path: 'libro/:id', component: LibroFormComponent },
      { path: ':id', component: LibroDetailsComponent }
    ]
  },
  {
    path: 'autores', component: AutoresComponent, children: [
      { path: 'autor', component: AutorFormComponent },
      { path: 'autor/:id', component: AutorFormComponent },
      { path: ':id', component: AutorDetailsComponent }
    ]
  },
  {
    path: 'editoriales', component: EditorialesComponent, children: [
      // { path: 'editorial', component: EditorialFormComponent },
      // { path: 'editorial/:id', component: EditorialFormComponent },
      { path: ':id', component: EditorialDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
