import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.routes'),
      },
    ],
  },
  {
    path: 'page-not-found',
    loadComponent: () =>
      import('./shared/pages/page-not-found/page-not-found.component'),
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  }
];
