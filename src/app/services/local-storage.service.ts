import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  static readonly TASKS_KEY: string = 'tasks';
  constructor() { }
  saveTasks(tasks: Array<ITask>) {
    localStorage.setItem(LocalStorageService.TASKS_KEY, JSON.stringify(tasks));
  }

  recoverTasks(): Array<ITask> {
    let tasks = localStorage.getItem(LocalStorageService.TASKS_KEY);
    //return tasks ? JSON.parse(tasks) : [];
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  }
}
