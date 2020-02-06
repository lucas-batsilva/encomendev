import { TestBed } from '@angular/core/testing';

import { EncomendaDataService } from './encomenda-data.service';

describe('EncomendaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncomendaDataService = TestBed.get(EncomendaDataService);
    expect(service).toBeTruthy();
  });
});
