import { TestBed } from '@angular/core/testing';

import { BeerStyleService } from './beer-style.service';

describe('BeerStyleService', () => {
  let service: BeerStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
