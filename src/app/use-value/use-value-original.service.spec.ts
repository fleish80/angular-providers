import { TestBed } from '@angular/core/testing';

import { UseValueOriginalService } from './use-value-original.service';

describe('UseValueOriginalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseValueOriginalService = TestBed.get(UseValueOriginalService);
    expect(service).toBeTruthy();
  });
});
