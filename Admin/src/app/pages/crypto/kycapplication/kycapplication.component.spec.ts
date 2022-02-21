import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KycapplicationComponent } from './kycapplication.component';

describe('KycapplicationComponent', () => {
  let component: KycapplicationComponent;
  let fixture: ComponentFixture<KycapplicationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KycapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
