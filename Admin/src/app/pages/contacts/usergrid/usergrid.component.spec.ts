import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsergridComponent } from './usergrid.component';

describe('UsergridComponent', () => {
  let component: UsergridComponent;
  let fixture: ComponentFixture<UsergridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
