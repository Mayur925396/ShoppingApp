import { TestBed } from '@angular/core/testing';

import { CouterService } from './couter.service';

describe('CouterService', () => {
  let service: CouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
