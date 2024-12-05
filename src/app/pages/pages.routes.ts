import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home-page/home-page.component'),
  },
  {
    path: 'energy-data',
    loadChildren: () => import('./energy-data/energy-data.routes'),
  },
  {
    path: 'energy-source',
    loadChildren: () => import('./energy-source/energy-source.routes'),
  },
] as Routes;
