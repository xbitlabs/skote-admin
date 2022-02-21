import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApexComponent } from './apex.component';

describe('ApexComponent', () => {
  let component: ApexComponent;
  let fixture: ComponentFixture<ApexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
