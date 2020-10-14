import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import ;
import { GeneralComponent } from './components/general/general.component'{ SmtpComponent } from './components/smtp/smtp.component';

const routes: Routes = [];

@NgModule({
  i,
  declarations: [AuthComponent]mports: [Ro, GeneralComponentuterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SmtpComponent]
})
export class AppSettingsRoutingModule { }
