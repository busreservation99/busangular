import { TestBed } from '@angular/core/testing';

import { FetchSeatStatusService } from './fetch-seat-status.service';

describe('FetchSeatStatusService', () => {
  let service: FetchSeatStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSeatStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
