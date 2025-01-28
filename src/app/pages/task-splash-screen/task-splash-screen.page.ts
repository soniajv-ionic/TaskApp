import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-task-splash-screen',
  templateUrl: './task-splash-screen.page.html',
  styleUrls: ['./task-splash-screen.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class TaskSplashScreenPage implements OnInit {
  constructor(private navCtrl: NavController) {}
  //navCtrl = inject(NavController);

  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateForward('task-all');
    }, 3000); // 3000 ms = 3 segundos
  }
}
