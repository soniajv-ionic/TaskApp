import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import {
//   IonApp,
//   IonSplitPane,
//   IonMenu,
//   IonContent,
//   IonList,
//   IonListHeader,
//   IonNote,
//   IonMenuToggle,
//   IonItem,
//   IonIcon,
//   IonLabel,
//   IonRouterOutlet,
//   IonRouterLink,
// } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  createOutline,
  createSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
  starOutline,
  informationCircleOutline,
  informationCircleSharp,
  starSharp,
  listOutline,
  listSharp,
  searchCircleOutline,
  searchCircleSharp,
} from 'ionicons/icons';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonicModule,

    // RouterLink,
    // RouterLinkActive,
    // IonRouterLink,
    // IonRouterOutlet,
    // IonApp,
    // IonSplitPane,
    // IonMenu,
    // IonContent,
    // IonList,
    // IonListHeader,
    // IonNote,
    // IonMenuToggle,
    // IonItem,
    // IonIcon,
    // IonLabel,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Add Task', url: '/task-add', icon: 'create' },
    { title: 'All Tasks', url: '/task-all', icon: 'list' },
    { title: 'Search', url: '/task-search', icon: 'search-circle' },
    {
      title: 'About this App',
      url: '/task-about',
      icon: 'information-circle',
    },
  ];
  public labels = [
    { title: 'High', url: '/task-search/High' },
    { title: 'Medium', url: 'task-search/Medium' },
    { title: 'Low', url: '/task-search/Low' },
  ];
  constructor() {
    addIcons({
      createOutline,
      createSharp,
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
      starOutline,
      starSharp,
      informationCircleOutline,
      informationCircleSharp,
      listOutline,
      listSharp,
      searchCircleOutline,
      searchCircleSharp,
    });
  }
}
