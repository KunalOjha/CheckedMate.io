import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsModule } from '../materials/materials.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginPortalComponent } from './containers/login-portal/login-portal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MaterialsModule
  ],
  declarations: [
    LoginPageComponent,
    LoginPortalComponent
  ]
})
export class LoginModule { }
