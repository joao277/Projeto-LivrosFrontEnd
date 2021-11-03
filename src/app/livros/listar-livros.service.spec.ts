import { TestBed } from '@angular/core/testing';

import { ListarLivrosService } from './listar-livros.service';

describe('ListarLivrosService', () => {
  let service: ListarLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
