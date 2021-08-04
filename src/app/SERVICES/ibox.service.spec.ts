import { TestBed } from '@angular/core/testing';

import { IboxService } from './ibox.service';

describe('IboxService', () => {
  let service: IboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
