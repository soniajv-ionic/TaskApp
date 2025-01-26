import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskSearchPage } from './task-search.page';

describe('TaskSearchPage', () => {
  let component: TaskSearchPage;
  let fixture: ComponentFixture<TaskSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
