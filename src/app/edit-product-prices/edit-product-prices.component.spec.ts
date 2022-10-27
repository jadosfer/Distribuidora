import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductPricesComponent } from './edit-product-prices.component';

describe('EditProductPricesComponent', () => {
  let component: EditProductPricesComponent;
  let fixture: ComponentFixture<EditProductPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
