import { SchedulingRoutingModule } from './scheduling-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSchedulingComponentComponent } from './main-scheduling-component/main-scheduling-component.component';
import { SchedulingEachPageComponentComponent } from './scheduling-each-page-component/scheduling-each-page-component.component';



@NgModule({
  declarations: [MainSchedulingComponentComponent, SchedulingEachPageComponentComponent],
  imports: [
    CommonModule,
    SchedulingRoutingModule
  ]
})
export class SchedulingModule { }
