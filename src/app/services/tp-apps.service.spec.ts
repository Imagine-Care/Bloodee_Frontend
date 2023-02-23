import { TestBed } from '@angular/core/testing';

import { TpAppsService } from './tp-apps.service';

describe('TpAppsService', () => {
  let service: TpAppsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpAppsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
