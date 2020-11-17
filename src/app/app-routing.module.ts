import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginLayoutComponent} from './pages/login/login-layout/login-layout.component';
import {HomeComponent} from './pages/main/home/home.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';

const routes: Routes  = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginLayoutComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
