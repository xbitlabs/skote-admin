import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteptwoverificationComponent } from './steptwoverification.component';

describe('SteptwoverificationComponent', () => {
  let component: SteptwoverificationComponent;
  let fixture: ComponentFixture<SteptwoverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteptwoverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteptwoverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
