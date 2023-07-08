import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppSettingsService } from "../app-initializer/app-settings.service";
import { AppSettings } from "../app-initializer/appsettings";
import { Injector } from "@angular/core";

export abstract class BaseService<TEntity, TKey> {

  abstract endpoint: string;
  protected appSettings:AppSettings;
  protected httpClient: HttpClient;

  constructor(private injector: Injector) {
    this.appSettings = injector.get(AppSettingsService).appSettings;
    this.httpClient = injector.get(HttpClient);
  }

  get(id: TKey): Observable<TEntity> {
    let url = this.buildUrl(id);
    return this.httpClient.get<TEntity>(url);
  }

  list(): Observable<TEntity[]> {
    let url = this.buildUrl();
    return this.httpClient.get<TEntity[]>(url);
  }

  post(body: TEntity): Observable<TEntity> {
    let url = this.buildUrl();
    return this.httpClient.post<TEntity>(url, body);
  }

  put(id: TKey, body: TEntity): Observable<TEntity> {
    let url = this.buildUrl(id);
    return this.httpClient.put<TEntity>(url, body);
  }

  delete(id: TKey): Observable<any> {
    let url = this.buildUrl(id);
    return this.httpClient.delete(url);
  }

  protected buildUrl(id?: TKey): string {
    let urlResult = this.appSettings.urlApi + '/' + this.endpoint;
    return id != null ? urlResult + '/' + id : urlResult;
  }
}
