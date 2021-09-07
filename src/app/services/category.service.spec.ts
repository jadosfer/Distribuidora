import { TestBed } from '@angular/core/testing';

import { ProdCategoryService } from './prod-category.service';

describe('CategoryService', () => {
  let service: ProdCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
