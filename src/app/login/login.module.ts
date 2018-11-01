import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortalComponent } from './portal/portal.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MaterialsModule
  ],
  declarations: [
    LoginPageComponent,
    PortalComponent
  ]
})
export class LoginModule { }
