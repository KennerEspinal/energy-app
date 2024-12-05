import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./list/list.component'),
    pathMatch: 'full',
  },
  {
    path: 'create',
    loadComponent: () => import('./create-update/create-update.component'),
  },
  {
    path: 'update',
    loadComponent: () => import('./create-update/create-update.component'),
  }
] as Routes;
