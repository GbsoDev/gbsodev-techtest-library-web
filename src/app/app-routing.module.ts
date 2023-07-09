import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'library'
    , loadChildren: () =>  import('./library/library.module').then(x=> x.LibraryModule)
    , component :LibraryComponent
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
