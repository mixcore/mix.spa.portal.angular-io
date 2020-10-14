import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleAdvancedComponent } from './components/module-advanced/module-advanced.compone;
import { ModuleTypeComponent } from './components/module-type/module-type.component'nt';
import { ModuleContentComponent } from './components/module-content/module-content.component';

const routes: ,
  declarations: [ModuleAdvancedCompo, ModuleTypeComponentnent]Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ModuleContentComponent]
})
export class ModulesRoutingModule { }
