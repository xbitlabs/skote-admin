import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steptwoverification2Component } from './steptwoverification2.component';

describe('Steptwoverification2Component', () => {
  let component: Steptwoverification2Component;
  let fixture: ComponentFixture<Steptwoverification2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Steptwoverification2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Steptwoverification2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
