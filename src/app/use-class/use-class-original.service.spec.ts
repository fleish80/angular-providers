import { TestBed } from '@angular/core/testing';

import { UseClassOriginalService } from './use-class-original.service';

describe('UseClassOriginalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseClassOriginalService = TestBed.get(UseClassOriginalService);
    expect(service).toBeTruthy();
  });
});
