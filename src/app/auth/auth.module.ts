import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MaterialsModule } from '../materials/materials.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthEffects } from './effects/auth.effects';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginPortalComponent } from './containers/login-portal/login-portal.component';
import { LogoutPromptComponent } from './components/logout-prompt/logout-prompt.component';

@NgModule({
  imports: [
    CommonModule,  
    MaterialsModule,
    NgbModule,
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    LoadingComponent,
    LoginPageComponent,
    LoginPortalComponent,
    LogoutPromptComponent
  ],
  entryComponents: [LogoutPromptComponent]
})
export class AuthModule { }
