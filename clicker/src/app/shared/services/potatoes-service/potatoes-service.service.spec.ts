import { TestBed } from '@angular/core/testing';

import { PotatoesService } from './potatoes-service.service';

describe('PotatoesService', () => {
  let service: PotatoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotatoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
