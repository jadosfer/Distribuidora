import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoSuccessComponent as PedidoSuccessComponent } from './pedido-success.component';

describe('PedidoSuccessComponent', () => {
  let component: PedidoSuccessComponent;
  let fixture: ComponentFixture<PedidoSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
