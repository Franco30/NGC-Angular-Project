import { TestBed } from '@angular/core/testing';

import { ApplicantService } from './applicant.service';

describe('ApplicantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicantService = TestBed.get(ApplicantService);
    expect(service).toBeTruthy();
  });
});
