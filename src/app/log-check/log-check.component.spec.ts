import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCheckComponent } from './log-check.component';

describe('LogCheckComponent', () => {
  let component: LogCheckComponent;
  let fixture: ComponentFixture<LogCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
