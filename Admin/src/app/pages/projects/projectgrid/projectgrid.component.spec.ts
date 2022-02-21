import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectgridComponent } from './projectgrid.component';

describe('ProjectgridComponent', () => {
  let component: ProjectgridComponent;
  let fixture: ComponentFixture<ProjectgridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
