import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsNumericInputComponent } from './ps-numeric-input.component';

describe('PsNumericInputComponent', () => {
  let component: PsNumericInputComponent;
  let fixture: ComponentFixture<PsNumericInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsNumericInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsNumericInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
