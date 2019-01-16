import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: []
})
export class AuthModule { }
