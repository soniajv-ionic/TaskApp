import { inject, Injectable } from '@angular/core';
import { ITask, Priority } from '../interfaces/itask';
import { LocalStorageService } from './local-storage.service';
import { AngularStorageService } from './angular-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private tasks: ITask[] = [];
  //private storageService = inject(LocalStorageService);
  private storageService = inject(AngularStorageService);

  constructor() {
    // Fake tasks, to be used as an example
    // this.initTasks();

    // Synchronous call to recover tasks from localStorage (localStorage)
    // this.tasks = this.storageService.recoverTasks();

    // Asynchronous call to recover tasks using AngularStorageService (AngularStorage)
    this.storageService
      .recoverTasks()
      .then((data) => {
        if (data != null) {
          // If there are tasks in storage, assign them to the tasks array
          this.tasks = data;
        }
      })
      .catch((error) => {
        console.error('Error while reading the data');
      })
      .finally(() => {
        console.log('Task recovery process completed');
      });
  }

  addTask(task: ITask) {
    this.tasks.push({ ...task });
    this.storageService.saveTasks(this.tasks);
  }

  getTasks() {
    return this.tasks;
  }

  finishTask(task: ITask) {
    task.status = 'Done';
    this.storageService.saveTasks(this.tasks);
  }

  processTask(task: ITask) {
    task.status = 'In progress';
    this.storageService.saveTasks(this.tasks);
  }

  reopenTask(task: ITask) {
    task.status = 'Not done';
    this.storageService.saveTasks(this.tasks);
  }

  //  private initTasks() {
  // let task1: ITask = {
  //   name: 'Pintar',
  //   description: 'Pintar la casa',
  //   deadline: '31/01/2025',
  //   priority: Priority.HIGH,
  //   status: 'Not done',
  // };

  // let task2: ITask = {
  //   name: 'Coche',
  //   description: 'Lavar el coche',
  //   deadline: '01/03/2026',
  //   priority: Priority.LOW,
  //   status: 'In progress',
  // };

  // let task3: ITask = {
  //   name: 'Pan',
  //   description: 'Comprar el PAn',
  //   deadline: '01/02/2025',
  //   priority: Priority.MEDIUM,
  //   status: 'Not done',
  // };

  // this.addTask(task1);
  // this.addTask(task2);
  // this.addTask(task3);
  //  }
}
