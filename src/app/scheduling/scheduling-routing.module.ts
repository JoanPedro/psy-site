import { SchedulingEachPageComponentComponent } from './scheduling-each-page-component/scheduling-each-page-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSchedulingComponentComponent } from './main-scheduling-component/main-scheduling-component.component';


const routes: Routes = [
  { path: '', component: MainSchedulingComponentComponent},
  ...['1', '2', '3'].map((path: string) => ({
    path,
    component: SchedulingEachPageComponentComponent
  }))
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }
