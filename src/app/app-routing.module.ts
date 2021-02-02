import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponentComponent } from './home/main-home-component/main-home-component.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module')
      .then(module => module.HomeModule),
  },
  {
    path: 'agenda',
    loadChildren: () => import('./scheduling/scheduling.module')
      .then(module => module.SchedulingModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module')
      .then(module => module.BlogModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(module => module.HomeModule),
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module')
      .then(module => module.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
