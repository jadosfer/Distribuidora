import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacesComponent } from './replaces.component';

describe('ReplacesComponent', () => {
  let component: ReplacesComponent;
  let fixture: ComponentFixture<ReplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
