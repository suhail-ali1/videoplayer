import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCommentsComponent } from './task-comments.component';

describe('TaskCommentsComponent', () => {
  let component: TaskCommentsComponent;
  let fixture: ComponentFixture<TaskCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCommentsComponent]
    });
    fixture = TestBed.createComponent(TaskCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
