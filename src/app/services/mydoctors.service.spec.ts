import { TestBed } from '@angular/core/testing';

import { MydoctorsService } from './mydoctors.service';

describe('MydoctorsService', () => {
  let service: MydoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
