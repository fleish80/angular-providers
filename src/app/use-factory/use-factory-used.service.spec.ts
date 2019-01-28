import { TestBed } from '@angular/core/testing';

import { UseFactoryUsedService } from './use-factory-used.service';

describe('UseFactoryUsedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseFactoryUsedService = TestBed.get(UseFactoryUsedService);
    expect(service).toBeTruthy();
  });
});
