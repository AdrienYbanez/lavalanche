import { TestBed } from '@angular/core/testing';

import { PresenceStoreService } from './presence-store.service';

describe('PresenceStoreService', () => {
  let service: PresenceStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresenceStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
