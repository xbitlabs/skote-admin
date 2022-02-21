import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LendingComponent } from './lending.component';

describe('LendingComponent', () => {
  let component: LendingComponent;
  let fixture: ComponentFixture<LendingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
