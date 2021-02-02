import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponentComponent } from './main-home-component/main-home-component.component';



@NgModule({
  declarations: [MainHomeComponentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
