import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.page.html',
  styleUrls: ['./task-search.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonMenuButton, IonToolbar, CommonModule, FormsModule]
})
export class TaskSearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
