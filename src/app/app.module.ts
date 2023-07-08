import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryModule } from './library/library.module';
import { HttpClientModule } from '@angular/common/http';
import { loadConfigProvider } from './app-initializer/app.initializer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LibraryModule
  ],
  providers: [loadConfigProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
