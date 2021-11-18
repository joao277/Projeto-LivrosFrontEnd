import { TestBed } from '@angular/core/testing';

import { RegislivroService } from './regislivro.service';

describe('RegislivroService', () => {
  let service: RegislivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegislivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
