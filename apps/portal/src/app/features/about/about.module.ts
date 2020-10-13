import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '../../shared/shared.module';

import { SharedModule } from '@mixcore/shared';

import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, SharedModule, AboutRoutingModule]
})
export class AboutModule {}
