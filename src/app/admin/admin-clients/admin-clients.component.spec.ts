import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsComponent as AdminClientsComponent } from './admin-clients.component';

describe('AdminPedidosComponent', () => {
  let component: AdminClientsComponent;
  let fixture: ComponentFixture<AdminClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
