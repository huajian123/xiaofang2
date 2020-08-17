import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginLayoutComponent} from './pages/login/login-layout/login-layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginLayoutComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
