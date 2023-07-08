import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Libro } from '../model/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService extends BaseService<Libro, number>{
  override endpoint: string = 'libros';

  constructor(injector: Injector) {
    super(injector);
  }
}

