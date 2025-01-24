import { inject, Injectable } from '@angular/core';
import { ITask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  private tasks: ITask[] = []

  constructor() { }

  addTask(task: ITask) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}
