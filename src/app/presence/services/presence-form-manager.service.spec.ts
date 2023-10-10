import { TestBed } from '@angular/core/testing';

import { PresenceFormManagerService } from './presence-form-manager.service';

describe('PresenceFormManagerService', () => {
  let service: PresenceFormManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresenceFormManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
