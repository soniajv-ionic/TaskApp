import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonMenuButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItemSliding,
  IonItem,
  IonAvatar,
  IonLabel,
  IonItemOptions,
  IonIcon,
  IonItemOption,
  IonInput,
  IonBadge,
} from '@ionic/angular/standalone';
import { ITask } from 'src/app/interfaces/itask';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { logoIonic } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.page.html',
  styleUrls: ['./task-search.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonAvatar,
    IonItem,
    IonItemSliding,
    IonList,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonMenuButton,
    IonToolbar,
    IonInput,
    IonBadge,
    CommonModule,
    FormsModule,
  ],
})
export class TaskSearchPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  searchText: string = '';
  taskManagerService = inject(TaskManagerService);
  tasks = this.taskManagerService.getTasks();
  filteredTasks = this.tasks;
  priority: string = '';

  constructor() {
    addIcons({ logoIonic });
  }

  ngOnInit() {
    this.priority = this.activatedRoute.snapshot.paramMap.get(
      'priority'
    ) as string;
    if (this.priority !== 'All') {
      this.filteredTasks = this.tasks.filter(
        (t) => t.priority === this.priority
      );
    }
  }

  searchTask() {
    this.filteredTasks = this.tasks.filter((t) =>
      t.name?.includes(this.searchText)
    );
  }

  finishTask(task: ITask) {
    this.taskManagerService.finishTask(task);
  }
  processTask(task: ITask) {
    this.taskManagerService.processTask(task);
  }
  reopenTask(task: ITask) {
    this.taskManagerService.reopenTask(task);
  }
}
