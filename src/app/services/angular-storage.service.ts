import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class AngularStorageService {

  constructor(private storage: Storage) {
    this.init()
    }

  async init() {
    this.storage = await this.storage.create();
  }

  saveTasks(tasks: Array<ITask>) {

  }

  recoverTasks(): Array<ITask> {
    return [];
  }


}
