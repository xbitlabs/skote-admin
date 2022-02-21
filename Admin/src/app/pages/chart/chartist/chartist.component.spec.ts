import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChartistComponent } from './chartist.component';

describe('ChartistComponent', () => {
  let component: ChartistComponent;
  let fixture: ComponentFixture<ChartistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
