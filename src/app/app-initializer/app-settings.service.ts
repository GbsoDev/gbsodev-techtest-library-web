import { Injectable } from "@angular/core";

import { catchError, tap } from "rxjs/operators";
import { AppSettings } from "./appsettings";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  appSettings!: AppSettings;

  constructor(private httClient: HttpClient) { }

  loadAppSettings() {
    const appSettingsFile = environment.production ? 'appsettings.json' : 'appsettings.development.json';
    return this.httClient
      .get<AppSettings>('./assets/' + appSettingsFile)
      .pipe(tap((value: AppSettings) => {
        this.appSettings = value
        console.log('carga de appSettings exitosa');
      }),
        catchError((error: any) => {
          console.log('Error al cargar appsettings', error);
          throw error;
        }));
  }
}
