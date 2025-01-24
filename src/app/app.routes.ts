import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-tasks',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'task-add',
    loadComponent: () => import('./pages/task-add/task-add.page').then( m => m.TaskAddPage)
  },

];
