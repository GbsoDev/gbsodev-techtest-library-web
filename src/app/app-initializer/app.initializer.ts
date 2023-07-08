import { APP_INITIALIZER, FactoryProvider } from "@angular/core";
import { AppSettingsService } from "./app-settings.service";

function loadConfigFactory(appSettingsService: AppSettingsService) {
  return () => appSettingsService.loadAppSettings();
}

export const loadConfigProvider: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: loadConfigFactory,
  deps: [AppSettingsService],
  multi: true
};
