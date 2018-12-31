import { TestBed } from '@angular/core/testing';

import { JustUseService } from './just-use.service';

describe('JustUseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JustUseService = TestBed.get(JustUseService);
    expect(service).toBeTruthy();
  });
});
