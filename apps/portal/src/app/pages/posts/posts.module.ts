import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@mixcore/shared';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';


@NgModule({
  declarations: [PostsComponent, PostListComponent, PostCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
