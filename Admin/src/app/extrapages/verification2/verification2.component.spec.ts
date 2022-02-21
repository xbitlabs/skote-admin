import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verification2Component } from './verification2.component';

describe('Verification2Component', () => {
  let component: Verification2Component;
  let fixture: ComponentFixture<Verification2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Verification2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Verification2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
