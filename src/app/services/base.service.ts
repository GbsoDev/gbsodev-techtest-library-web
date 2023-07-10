import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppSettingsService } from "../app-initializer/app-settings.service";
import { AppSettings } from "../app-initializer/appsettings";
import { inject } from "@angular/core";

export abstract class BaseService<TEntity, TKey> {

  abstract endpoint: string;
  protected httpClient: HttpClient;
  private appSettingsService: AppSettingsService;
  protected tokenKey = 'token';
  protected tokenExpireKey = 'token-expire';


  constructor() {
    this.appSettingsService = inject(AppSettingsService)
    this.httpClient = inject(HttpClient);
  }

  protected appSettings(): AppSettings {
    return this.appSettingsService.appSettings
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

  put(body: TEntity): Observable<TEntity> {
    let url = this.buildUrl();
    return this.httpClient.put<TEntity>(url, body);
  }

  delete(id: TKey): Observable<any> {
    let url = this.buildUrl(id);
    return this.httpClient.delete(url);
  }

  protected buildUrl(id?: TKey): string {
    let urlResult = this.appSettingsService.appSettings.urlApi + '/' + this.endpoint;
    return id != null ? urlResult + '/' + id : urlResult;
  }

  getToken(): string | null {
     // Obtener el token desde localStorage
    return localStorage.getItem(this.tokenKey);
  }
}
