import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponentComponent } from './main-home-component/main-home-component.component';
import { ParallaxDirective } from '../config/Parallax.directive';
import { HomeCardComponentComponent } from './home-card-component/home-card-component.component';



@NgModule({
  declarations: [
    MainHomeComponentComponent,
    ParallaxDirective,
    HomeCardComponentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
