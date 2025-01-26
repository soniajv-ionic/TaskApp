import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskSplashScreenPage } from './task-splash-screen.page';

describe('TaskSplashScreenPage', () => {
  let component: TaskSplashScreenPage;
  let fixture: ComponentFixture<TaskSplashScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSplashScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
