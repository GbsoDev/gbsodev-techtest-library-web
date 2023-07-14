import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialesComponent } from './editoriales/editoriales.component';

const routes: Routes = [
  { path: 'libros', component: LibrosComponent },
  { path: 'autores', component: AutoresComponent },
  { path: 'editoriales', component: EditorialesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
