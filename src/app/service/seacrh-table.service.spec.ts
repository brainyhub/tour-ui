import { TestBed } from '@angular/core/testing';

import { SeacrhTableService } from './seacrh-table.service';

describe('SeacrhTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeacrhTableService = TestBed.get(SeacrhTableService);
    expect(service).toBeTruthy();
  });
});
