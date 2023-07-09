import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryModule } from './library/library.module';
import { HttpClientModule } from '@angular/common/http';
import { loadConfigProvider } from './app-initializer/app.initializer';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LibraryModule,
    FormsModule,
  ],
  providers: [loadConfigProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
