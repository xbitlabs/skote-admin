import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SellingchartComponent } from './sellingchart.component';

describe('SellingchartComponent', () => {
  let component: SellingchartComponent;
  let fixture: ComponentFixture<SellingchartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
