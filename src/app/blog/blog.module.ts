import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBlogComponentComponent } from './main-blog-component/main-blog-component.component';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [MainBlogComponentComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
