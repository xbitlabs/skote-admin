import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvancedformComponent } from './advancedform.component';

describe('AdvancedformComponent', () => {
  let component: AdvancedformComponent;
  let fixture: ComponentFixture<AdvancedformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
