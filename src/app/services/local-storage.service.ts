import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  static readonly TASKS_KEY = 'tasks';

  constructor() {}

  saveTasks(tasks: ITask[]): void {
    localStorage.setItem(LocalStorageService.TASKS_KEY, JSON.stringify(tasks));
  }

  recoverTasks(): ITask[] {
    let tasks = localStorage.getItem(LocalStorageService.TASKS_KEY);
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  }
}
