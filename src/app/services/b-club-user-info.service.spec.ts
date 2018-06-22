import { TestBed, inject } from '@angular/core/testing';

import { BClubUserInfoService } from './b-club-user-info.service';

describe('BClubUserInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BClubUserInfoService]
    });
  });

  it('should be created', inject([BClubUserInfoService], (service: BClubUserInfoService) => {
    expect(service).toBeTruthy();
  }));
});
