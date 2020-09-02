import { TestBed } from '@angular/core/testing';

import { VVTServiceService } from './vvtservice.service';

describe('VVTServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VVTServiceService = TestBed.get(VVTServiceService);
    expect(service).toBeTruthy();
  });
});
