import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Autor } from '../model/autor';

@Injectable({
  providedIn: 'root'
})
export class LibroService extends BaseService<Autor, number>{
  override endpoint: string = 'libros';

  constructor(injector: Injector) {
    super(injector);
  }
}

