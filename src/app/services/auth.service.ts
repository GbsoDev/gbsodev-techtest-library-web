import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<Usuario, number>{
  override endpoint: string = 'auth';

  constructor(injector: Injector) {
    super(injector);
  }
}
