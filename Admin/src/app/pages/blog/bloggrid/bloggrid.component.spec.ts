import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggridComponent } from './bloggrid.component';

describe('BloggridComponent', () => {
  let component: BloggridComponent;
  let fixture: ComponentFixture<BloggridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
