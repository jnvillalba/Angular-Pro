import { TestBed } from '@angular/core/testing';

import { JnvrSideMenuService } from './jnvr-side-menu.service';

describe('JnvrSideMenuService', () => {
  let service: JnvrSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JnvrSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
