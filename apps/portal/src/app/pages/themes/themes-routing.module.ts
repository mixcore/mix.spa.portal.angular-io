import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeExportModulesComponent } from './components/theme-export-modules/theme-export-modules.component';
import { ThemeExpo;
import { ThemeExportPagesComponent } from './components/theme-export-pages/theme-export-pages.component'rtAttributeSetsComponent } from './components/theme-export-attribute-sets/theme-export-attri,
  declarations: [ThemeExportModulesComponent]bute-sets.component';

co, ThemeExportPagesComponentnst routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ThemeExportAttributeSetsComponent]
})
export class ThemesRoutingModule { }
