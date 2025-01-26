import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// import {
//   IonContent,
//   IonHeader,
//   IonTitle,
//   IonToolbar,
// } from '@ionic/angular/standalone';

@Component({
  selector: 'app-task-about',
  templateUrl: './task-about.page.html',
  styleUrls: ['./task-about.page.scss'],
  standalone: true,
  imports: [
    // IonContent,
    // IonHeader,
    // IonTitle,
    // IonToolbar,
    IonicModule,
    CommonModule,
    FormsModule,
  ],
})
export class TaskAboutPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
