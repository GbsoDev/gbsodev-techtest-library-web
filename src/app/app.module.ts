import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryModule } from './library/library.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { loadConfigProvider } from './app-initializer/app.initializer';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { TokenInterceptor } from './interceptors/tokenInterceptor';
import { AppSettingsService } from './app-initializer/app-settings.service';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LibraryModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    AppSettingsService,
    loadConfigProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
