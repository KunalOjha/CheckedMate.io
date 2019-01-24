import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from '../materials/materials.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginPortalComponent } from './containers/login-portal/login-portal.component';
import { SignupPortalComponent } from './containers/signup-portal/signup-portal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialsModule,
    NgbModule
  ],
  declarations: [ LoginPageComponent, LoginPortalComponent, SignupPortalComponent ],
})
export class AuthModule { }
