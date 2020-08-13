import { TestBed } from '@angular/core/testing';

import { PsNumericInputService } from './ps-numeric-input.service';

describe('PsNumericInputService', () => {
  let service: PsNumericInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsNumericInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
