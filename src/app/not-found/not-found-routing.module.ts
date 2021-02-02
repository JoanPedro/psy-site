import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNotFoundComponentComponent } from './main-not-found-component/main-not-found-component.component';

const routes: Routes = [
  { path: '', component: MainNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
