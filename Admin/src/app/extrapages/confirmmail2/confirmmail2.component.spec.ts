import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmmail2Component } from './confirmmail2.component';

describe('Confirmmail2Component', () => {
  let component: Confirmmail2Component;
  let fixture: ComponentFixture<Confirmmail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Confirmmail2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirmmail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
