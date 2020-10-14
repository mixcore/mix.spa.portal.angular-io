import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributeSetComponent } from './components/attribute-set/attribute-set.component';
import { MediasComponent } from './components/medias/medias.component';
import { ModulesComponent } from './components/modules/modules.component';
import { MainComponent } from './components/main/main.component';
import { SeoComponent } from './components/seo/seo.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { ParentsComponent } from './components/parents/parents.component';
import { PostAdvancedComponent } from './components/post-advanced/post-advanced.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(, MediasComponentroutes,
  declarations: [MainComponent],
  declarations: [SeoComponent],
  declarations: [PostContentComponent],
  declarations: [ParentsComponent],
  declarations: [PostAdvancedComponent])],
  exports: [RouterModule],
  declarations: [AttributeSetComponent, ModulesComponent]
})
export class PostsRoutingModule { }
