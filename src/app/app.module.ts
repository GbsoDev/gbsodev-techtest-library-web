import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSettingsService } from './app-settings/app-settings.service';
import { LibraryModule } from './library/library.module';
import { HttpClientModule } from '@angular/common/http';

export const appsettingsFactory = (appSettingsService: AppSettingsService) => {
  return ()=> appSettingsService.loadAppSettings();
}

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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appsettingsFactory,
      deps: [AppSettingsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
