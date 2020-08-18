import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyNgZorroModule} from '../share/my-ng-zorro/my-ng-zorro.module';
import {LoginLayoutComponent} from "./login/login-layout/login-layout.component";
import {ShareModule} from "../share/share.module";
import { HomeComponent } from './main/home/home.component';



@NgModule({
  declarations: [LoginLayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    ShareModule,
    MyNgZorroModule,
  ],
  exports: [
  ]
})
export class PagesModule {
}
