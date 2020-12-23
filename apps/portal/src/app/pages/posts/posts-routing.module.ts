import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DatabasesComponent } from './components/databases/databases.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { MediasComponent } from './components/medias/medias.component';
import { ModulesComponent } from './components/modules/modules.component';
import { MainComponent } from './components/main/main.component';
import { SeoComponent } from './components/seo/seo.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { ParentsComponent } from './components/parents/parents.component';
import { PostAdvancedComponent } from './components/post-advanced/post-advanced.component';

const PostsComponentroutes: Routes = [
  {
    path: '',
    component: PostsComponent,
    data: { title: 'mixcore.menu.posts' },
    children: [
      {
        path: '',
        component: PostListComponent,
        data: { title: 'mixcore.menu.postlist' }
      },
      {
        path: 'post-create',
        component: PostCreateComponent,
        data: { title: 'mixcore.menu.postcreate' }
      }
    ]
  }
  
];
@NgModule({
  imports: [
    RouterModule.forChild(PostsComponentroutes)//,
    // MainComponent,
    // SeoComponent,
    // PostContentComponent,
    // ParentsComponent,
    // PostAdvancedComponent
  ],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
