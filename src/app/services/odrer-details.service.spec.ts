import { TestBed } from '@angular/core/testing';

import { OdrerDetailsService } from './odrer-details.service';

describe('OdrerDetailsService', () => {
  let service: OdrerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdrerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
