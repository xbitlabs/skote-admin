import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recoverpwd2Component } from './recoverpwd2.component';

describe('Recoverpwd2Component', () => {
  let component: Recoverpwd2Component;
  let fixture: ComponentFixture<Recoverpwd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recoverpwd2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recoverpwd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
