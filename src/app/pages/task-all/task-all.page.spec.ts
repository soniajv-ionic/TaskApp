import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskAllPage } from './task-all.page';

describe('TaskAllPage', () => {
  let component: TaskAllPage;
  let fixture: ComponentFixture<TaskAllPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
