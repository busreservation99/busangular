import { TestBed } from '@angular/core/testing';

import { FinalBookingService } from './final-booking.service';

describe('FinalBookingService', () => {
  let service: FinalBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
