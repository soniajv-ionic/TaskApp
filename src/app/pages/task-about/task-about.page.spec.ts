import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskAboutPage } from './task-about.page';

describe('TaskAboutPage', () => {
  let component: TaskAboutPage;
  let fixture: ComponentFixture<TaskAboutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
