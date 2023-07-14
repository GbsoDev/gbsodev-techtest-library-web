import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {
  @Output() cloced: EventEmitter<void> = new EventEmitter<void>();
  @Input({alias:'modal-title',required:true}) modalTitle?:string|null
  @Input({alias:'modal-id', required: true}) modalId?:string
  @ViewChild('openModalBtn') openModalBtn!: any;
  @ViewChild('cloceModalBtn') cloceModalBtn!: any;
  constructor() { }

  open() {
    this.openModalBtn.nativeElement.click();
  }

  cloce() {
    console.log('creerando modal');
    this.cloced.emit();
    this.cloceModalBtn.nativeElement.click();
  }
}

