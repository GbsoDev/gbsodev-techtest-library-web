import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Autor } from '../model/autor';

@Injectable({
  providedIn: 'root'
})
export class EditorialService extends BaseService<Autor, number>{
  override endpoint: string = 'editoriales';

  constructor(injector: Injector) {
    super(injector);
  }
}
