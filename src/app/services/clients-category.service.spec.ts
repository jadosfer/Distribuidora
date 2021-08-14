import { TestBed } from '@angular/core/testing';

import { ClientsCategoryService } from './clients-category.service';

describe('ClientsCategoryService', () => {
  let service: ClientsCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
