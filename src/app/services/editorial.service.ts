import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Editorial } from '../model/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService extends BaseService<Editorial, number>{
  override endpoint: string = 'editoriales';

  constructor(injector: Injector) {
    super(injector);
  }
}
