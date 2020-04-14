import { TestBed } from '@angular/core/testing';

import { ServiceDisplayService } from './service-display.service';

describe('ServiceDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceDisplayService = TestBed.get(ServiceDisplayService);
    expect(service).toBeTruthy();
  });
});
