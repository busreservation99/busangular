import { TestBed } from '@angular/core/testing';

import { UpdateSeatService } from './update-seat.service';

describe('UpdateSeatService', () => {
  let service: UpdateSeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
