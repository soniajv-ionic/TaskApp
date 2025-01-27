import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import {
//   IonCardContent,
//   IonCard,
//   IonCardHeader,
//   IonContent,
//   IonHeader,
//   IonTitle,
//   IonToolbar,
//   IonList,
//   IonCardTitle,
//   IonCardSubtitle,
// } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { ITask } from 'src/app/interfaces/itask';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { TaskComponentComponent } from "../../components/task-component/task-component.component";

@Component({
  selector: 'app-task-all',
  templateUrl: './task-all.page.html',
  styleUrls: ['./task-all.page.scss'],
  standalone: true,
  imports: [
    // IonCardContent,
    // IonCard,
    // IonCardHeader,
    // IonCardSubtitle,
    // IonCardTitle,
    // IonList,
    // IonContent,
    // IonHeader,
    // IonTitle,
    // IonToolbar,
    IonicModule,
    CommonModule,
    FormsModule,
    TaskComponentComponent
],
})
export class TaskAllPage implements OnInit {
  tasks: ITask[] = [];
  constructor() {}

  taskManagerService = inject(TaskManagerService);

  ngOnInit() {
    this.tasks = this.taskManagerService.getTasks();
  }
}
