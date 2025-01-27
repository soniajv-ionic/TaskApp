import { 
  Injectable } from '@angular/core';
import { ITask, Priority } from '../interfaces/itask';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private tasks: ITask[] = [];

  task1: ITask = {
    name: 'Pintar',
    description: 'Pintar la casa',
    deadline: '31/01/2025',
    priority: Priority.HIGH,
    status: 'Not done',
  };

  task2: ITask = {
    name: 'Coche',
    description: 'Lavar el coche',
    deadline: '01/03/2026',
    priority: Priority.LOW,
    status: 'Not done',
  };

  constructor() {
    this.tasks.push(this.task1);
    this.tasks.push(this.task2);
  }

  addTask(task: ITask) {
    this.tasks.push({...task});
  }

  getTasks() {
    return this.tasks;
  }
}
