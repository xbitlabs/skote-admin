import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoxiconsComponent } from './boxicons.component';

describe('BoxiconsComponent', () => {
  let component: BoxiconsComponent;
  let fixture: ComponentFixture<BoxiconsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
