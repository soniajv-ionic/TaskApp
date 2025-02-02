import { Component, Input, OnInit } from '@angular/core';
import { ITask, Priority } from 'src/app/interfaces/itask';
import { IonicModule } from '@ionic/angular';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.scss'],
  imports: [IonicModule, NgClass, NgStyle],
})
export class TaskComponentComponent implements OnInit {
  @Input() task: ITask = {};

  // ngStyle
  styleStatus = {};
  styleNotDone = { color: 'red' };
  styleInProgress = { color: 'blue' };
  styleDone = { color: 'green' };
  // ngClass
  typePriority = '';

  constructor() {}

  ngOnInit() {
    switch (this.task.status) {
      case 'Done':
        this.styleStatus = this.styleDone;
        break;
      case 'In progress':
        this.styleStatus = this.styleInProgress;
        break;
      case 'Not done':
        this.styleStatus = this.styleNotDone;
        break;
    }

    switch (this.task.priority) {
      case Priority.LOW:
        this.typePriority = 'priority-low';
        break;
      case Priority.MEDIUM:
        this.typePriority = 'priority-medium';
        break;
      case Priority.HIGH:
        this.typePriority = 'priority-high';
        break;
    }
  }
}
