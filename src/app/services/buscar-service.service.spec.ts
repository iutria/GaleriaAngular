import { TestBed } from '@angular/core/testing';

import { BuscarServiceService } from './buscar-service.service';

describe('BuscarServiceService', () => {
  let service: BuscarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
