import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-splash-screen',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'task-add',
    loadComponent: () =>
      import('./pages/task-add/task-add.page').then((m) => m.TaskAddPage),
  },
  {
    path: 'task-all',
    loadComponent: () =>
      import('./pages/task-all/task-all.page').then((m) => m.TaskAllPage),
  },
  {
    path: 'task-search',
    loadComponent: () =>
      import('./pages/task-search/task-search.page').then(
        (m) => m.TaskSearchPage
      ),
  },
  {
    path: 'task-about',
    loadComponent: () =>
      import('./pages/task-about/task-about.page').then((m) => m.TaskAboutPage),
  },
  {
    path: 'task-splash-screen',
    loadComponent: () =>
      import('./pages/task-splash-screen/task-splash-screen.page').then(
        (m) => m.TaskSplashScreenPage
      ),
  },
  {
    path: 'task-search/:priority',
    loadComponent: () =>
      import('./pages/task-search/task-search.page').then(
        (m) => m.TaskSearchPage
      ),
  },
];
