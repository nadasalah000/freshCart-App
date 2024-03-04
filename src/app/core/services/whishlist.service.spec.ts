import { TestBed } from '@angular/core/testing';

import { WhishlistService } from './whishlist.service';

describe('WhishlistService', () => {
  let service: WhishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
