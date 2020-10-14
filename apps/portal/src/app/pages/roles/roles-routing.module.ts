import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolePageNavigationComponent } from './components/role-page-navigation/role-page-navigation.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [RolePageNavigationComponent]
})
export class RolesRoutingModule { }
