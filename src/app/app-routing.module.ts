import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { AuthGuard } from './Guard/auth.guard';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
