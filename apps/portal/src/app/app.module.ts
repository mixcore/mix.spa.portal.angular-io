import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from '@mixcore/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './components/header/header.component';

// carbon-components-angular default imports
import { UIShellModule, IconModule } from 'carbon-components-angular';
import Notification16 from '@carbon/icons/es/notification/16';
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core
    CoreModule,

    // app
    AppRoutingModule,

    // carbon
    UIShellModule,
    IconModule
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([
      Notification16,
      UserAvatar16,
      AppSwitcher16
    ]);
  }
}

