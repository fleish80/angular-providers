import { TestBed } from '@angular/core/testing';

import { UseClassUsedService } from './use-factory-used.service';

describe('UseClassUsedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseClassUsedService = TestBed.get(UseClassUsedService);
    expect(service).toBeTruthy();
  });
});
