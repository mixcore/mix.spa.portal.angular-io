import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DatabasesComponent } from './components/databases/databases.component';
import { PostsComponent } from './components/posts/posts.component';
import { MediasComponent } from './components/medias/medias.component';
import { ModulesComponent } from './components/modules/modules.component';
import { MainComponent } from './components/main/main.component';
import { SeoComponent } from './components/seo/seo.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { ParentsComponent } from './components/parents/parents.component';
import { PostAdvancedComponent } from './components/post-advanced/post-advanced.component';

const MediasComponentroutes: Routes = [
  {
    path: '',
    component: PostsComponent,
    data: { title: 'mixcore.menu.about' }
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(MediasComponentroutes)//,
    // MainComponent,
    // SeoComponent,
    // PostContentComponent,
    // ParentsComponent,
    // PostAdvancedComponent
  ],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
