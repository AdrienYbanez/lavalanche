import { TestBed } from '@angular/core/testing';

import { PresencesStoreService } from './presences-store.service';

describe('PresencesStoreService', () => {
  let service: PresencesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresencesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
