import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaskManagerService } from '../../services/task-manager.service';
import { ITask, Priority } from '../../interfaces/itask';
// import {
//   IonContent,
//   IonHeader,
//   IonTitle,
//   IonToolbar,
//   IonItem,
//   IonButtons,
//   IonButton,
//   IonLabel,
//   IonModal,
//   IonSelect,
//   IonSelectOption,
//   IonDatetimeButton,
//   IonMenuButton,
//   IonIcon,
// } from '@ionic/angular/standalone';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.page.html',
  styleUrls: ['./task-add.page.scss'],
  standalone: true,
  imports: [
    // IonContent,
    // IonHeader,
    // IonTitle,
    // IonToolbar,
    // IonItem,
    // IonButtons,
    // IonButton,
    // IonMenuButton,
    // IonLabel,
    // IonModal,
    // IonSelect,
    // IonSelectOption,
    // IonDatetimeButton,
    // IonIcon,
    CommonModule,
    FormsModule,
    IonicModule, // Incluye módulos necesarios
  ],
})
export class TaskAddPage implements OnInit {
  task: ITask = {};

  taskManagerService = inject(TaskManagerService);

  constructor() {
    this.task.status = 'Not done';
  }

  ngOnInit() {}

  submitTask(): void {
    this.taskManagerService.addTask(this.task);
    this.resetTaskForm();
  }

  resetTaskForm(): void {
    this.task = {
      name: '',
      description: '',
      priority: Priority.LOW,
      status: 'Not done',
      deadline: new Date().toISOString(),
    };
  }
}
