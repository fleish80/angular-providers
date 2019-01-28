import { TestBed } from '@angular/core/testing';

import { UseFactoryOriginalService } from './use-factory-original.service';

describe('UseFactoryOriginalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseFactoryOriginalService = TestBed.get(UseFactoryOriginalService);
    expect(service).toBeTruthy();
  });
});
