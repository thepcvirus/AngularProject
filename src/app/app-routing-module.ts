import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componenets/app-login/app-login';
import { SignupComponent } from './componenets/app-signup/app-signup';
import { ForgotPasswordComponent } from './componenets/forgot-password/forgot-password';
import { LogoutComponent } from './componenets/logout.component/logout.component';
import { Dashboard } from './componenets/dashboard/dashboard';
import { MainBody } from './main-body/main-body';
import { AuthGuard } from './componenets/auth.guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainBody },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
