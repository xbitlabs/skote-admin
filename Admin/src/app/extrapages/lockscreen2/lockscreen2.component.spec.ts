import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lockscreen2Component } from './lockscreen2.component';

describe('Lockscreen2Component', () => {
  let component: Lockscreen2Component;
  let fixture: ComponentFixture<Lockscreen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lockscreen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lockscreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
