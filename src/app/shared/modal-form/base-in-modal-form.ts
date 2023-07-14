import { Component, Directive, EventEmitter, Input, Output } from "@angular/core";

@Directive()
export abstract class BaseInModalForm<TKey>{
  @Output() finalized: EventEmitter<void> = new EventEmitter<void>;
  @Output() loaded: EventEmitter<void> = new EventEmitter<void>;
  @Output() title?: string | null;
  selectedId?: TKey | null;

  load(selectedId?: TKey) {
    console.log('cargando formulario');
    this.clear();
    this.selectedId = selectedId;
    this.findObject();
  }

  protected finalize(): void {
    console.log('finalizando formulario');
    this.clear();
    this.finalized.emit();
  }
  protected abstract clear(): void
  protected abstract findObject(): void;
  protected abstract saveObject(): void;

}
