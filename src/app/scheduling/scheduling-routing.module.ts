import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSchedulingComponentComponent } from './main-scheduling-component/main-scheduling-component.component';


const routes: Routes = [
  { path: '', component: MainSchedulingComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }
