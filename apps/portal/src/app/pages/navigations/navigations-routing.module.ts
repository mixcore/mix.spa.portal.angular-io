import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationValuesComponent } from './components/navigation-values/navigation-values.component';
import { NavigationFormComponent } from './components/navigation-form/navigation-form.component';

const route,
  declarations: [NavigationValuesComponent]s: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [NavigationFormComponent]
})
export class NavigationsRoutingModule { }
