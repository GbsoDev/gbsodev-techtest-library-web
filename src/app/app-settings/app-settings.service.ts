import { Injectable } from '@angular/core';
import { AppSettings } from './appsettings';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  appSettings!: AppSettings;

  constructor(private httClient: HttpClient) { }

  loadAppSettings() {
    const appSettingsFile = environment.produccion ? 'appsettings.json' : 'appsettings.development.json';
    this.httClient
      .get<AppSettings>('./assets/' + appSettingsFile)
      .subscribe(
        (value) => {
          this.appSettings = value;
        }
      )
  }
}
