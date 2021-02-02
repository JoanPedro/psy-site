import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { MainNotFoundComponentComponent } from './main-not-found-component/main-not-found-component.component';


@NgModule({
  declarations: [MainNotFoundComponentComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
