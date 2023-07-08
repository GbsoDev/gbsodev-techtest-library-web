import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialFormComponent } from './editorial-form.component';

describe('EditorialFormComponent', () => {
  let component: EditorialFormComponent;
  let fixture: ComponentFixture<EditorialFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorialFormComponent]
    });
    fixture = TestBed.createComponent(EditorialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
