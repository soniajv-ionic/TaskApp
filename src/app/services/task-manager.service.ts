import { inject, Injectable } from '@angular/core';
import { ITask, Priority } from '../interfaces/itask';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private tasks: ITask[] = [];
  private localStorageService = inject(LocalStorageService);

  constructor() {
    // Fake tasks, to be used as an example
    //this.initTasks();
    this.tasks = this.localStorageService.recoverTasks();
  }

  addTask(task: ITask) {
    this.tasks.push({ ...task });
    this.localStorageService.saveTasks(this.tasks);
  }

  getTasks() {
    return this.tasks;
  }

  finishTask(task: ITask) {
    task.status = 'Done';
    this.localStorageService.saveTasks(this.tasks);
  }

  processTask(task: ITask) {
    task.status = 'In progress';
    this.localStorageService.saveTasks(this.tasks);
  }

  reopenTask(task: ITask) {
    task.status = 'Not done';
    this.localStorageService.saveTasks(this.tasks);
  }

  // private initTasks() {
  //   let task1: ITask = {
  //     name: 'Pintar',
  //     description: 'Pintar la casa',
  //     deadline: '31/01/2025',
  //     priority: Priority.HIGH,
  //     status: 'Not done',
  //   };

  //   let task2: ITask = {
  //     name: 'Coche',
  //     description: 'Lavar el coche',
  //     deadline: '01/03/2026',
  //     priority: Priority.MEDIUM,
  //     status: 'In progress',
  //   };

  //   let task3: ITask = {
  //     name: 'Pan',
  //     description: 'Comprar el Pan',
  //     deadline: '01/02/2025',
  //     priority: Priority.LOW,
  //     status: 'Not done',
  //   };

  //   this.addTask(task1);
  //   this.addTask(task2);
  //   this.addTask(task3);
  // }
}
