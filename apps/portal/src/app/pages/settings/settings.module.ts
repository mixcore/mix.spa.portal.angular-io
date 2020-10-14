import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '../../shared/shared.module';

import { SharedModule } from '@mixcore/shared';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsContainerComponent } from './settings/settings-container.component';

@NgModule({
  declarations: [SettingsContainerComponent],
  imports: [CommonModule, SharedModule, SettingsRoutingModule]
})
export class SettingsModule {}
