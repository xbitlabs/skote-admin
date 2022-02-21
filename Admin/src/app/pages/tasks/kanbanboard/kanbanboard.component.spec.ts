import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KanbanboardComponent } from './kanbanboard.component';

describe('KanbanboardComponent', () => {
  let component: KanbanboardComponent;
  let fixture: ComponentFixture<KanbanboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
