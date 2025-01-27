import { Injectable } from '@angular/core';
import { ITask, Priority } from '../interfaces/itask';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private tasks: ITask[] = [];

  constructor() {
    // Fake tasks, to be used as an example
    this.initTasks();
  }

  addTask(task: ITask) {
    this.tasks.push({ ...task });
  }

  getTasks() {
    return this.tasks;
  }

  finishTask(task: ITask) {
    task.status = 'Done';
  }

  processTask(task: ITask) {
    task.status = 'In progress';
  }

  reopenTask(task: ITask) {
    task.status = 'Not done';
  }

  private initTasks() {
    let task1: ITask = {
      name: 'Pintar',
      description: 'Pintar la casa',
      deadline: '31/01/2025',
      priority: Priority.HIGH,
      status: 'Not done',
    };

    let task2: ITask = {
      name: 'Coche',
      description: 'Lavar el coche',
      deadline: '01/03/2026',
      priority: Priority.LOW,
      status: 'In progress',
    };

    let task3: ITask = {
      name: 'Pan',
      description: 'Comprar el PAn',
      deadline: '01/02/2025',
      priority: Priority.MEDIUM,
      status: 'Not done',
    };

    this.addTask(task1);
    this.addTask(task2);
    this.addTask(task3);
  }
}
