import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RangesliderComponent } from './rangeslider.component';

describe('RangesliderComponent', () => {
  let component: RangesliderComponent;
  let fixture: ComponentFixture<RangesliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RangesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
