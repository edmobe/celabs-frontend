import { TestBed } from '@angular/core/testing';

import { EventTimeStringService } from './event-time-string.service';

describe('EventTimeStringService', () => {
  let service: EventTimeStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventTimeStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
