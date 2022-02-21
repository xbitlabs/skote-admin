import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvancedtableComponent } from './advancedtable.component';

describe('AdvancedtableComponent', () => {
  let component: AdvancedtableComponent;
  let fixture: ComponentFixture<AdvancedtableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
