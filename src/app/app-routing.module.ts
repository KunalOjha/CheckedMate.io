import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { ChecklistComponent } from './checklist/checklist.component';


const routes:Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'checklist', component: ChecklistComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: LoginPageComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**,', redirectTo: 'dashboard' }
];

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}