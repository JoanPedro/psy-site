import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBlogComponentComponent } from './main-blog-component/main-blog-component.component';


const routes: Routes = [
  { path: '', component: MainBlogComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
