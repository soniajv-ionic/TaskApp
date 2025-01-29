import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/itask';
import { Storage } from '@ionic/storage-angular'; //Persistence

@Injectable({
  providedIn: 'root',
})
export class AngularStorageService {
  static readonly TASKS_KEY: string = 'tasks';

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this.storage = await this.storage.create();
  }

  saveTasks(tasks: Array<ITask>): void {
    // The promise object is processed here
    this.storage
      .set(AngularStorageService.TASKS_KEY, tasks)
      .then(() => {
        console.info('Storage proccess successfully completed');
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.info('Storage proccess finished');
      });
  }

  recoverTasks(): Promise<Array<ITask>> {
    // The promise object is returned to be processed by TaskManagerService
    return this.storage.get(AngularStorageService.TASKS_KEY);
  }
}
