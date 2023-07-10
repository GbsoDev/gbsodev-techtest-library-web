import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { authGuard as AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'library'
    , loadChildren: () =>  import('./library/library.module').then(x=> x.LibraryModule)
    , component :LibraryComponent
    , canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
