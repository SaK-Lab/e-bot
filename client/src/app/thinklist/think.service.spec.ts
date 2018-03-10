import { TestBed, inject } from '@angular/core/testing';

import { ThinkService } from './think.service';

describe('ThinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThinkService]
    });
  });

  it('should be created', inject([ThinkService], (service: ThinkService) => {
    expect(service).toBeTruthy();
  }));
});
