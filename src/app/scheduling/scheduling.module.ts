import { SchedulingRoutingModule } from './scheduling-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSchedulingComponentComponent } from './main-scheduling-component/main-scheduling-component.component';



@NgModule({
  declarations: [MainSchedulingComponentComponent],
  imports: [
    CommonModule,
    SchedulingRoutingModule
  ]
})
export class SchedulingModule { }
