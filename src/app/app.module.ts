import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/reducers';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { SharedModule } from './shared/shared.module';
import { UserEffects } from './store/effects/user.effects';
import { TasksEffects } from './store/effects/tasks.effects';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebase, 'checkthis-io'),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects, TasksEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [AuthGuard, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
