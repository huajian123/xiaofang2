import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyNgZorroModule} from '../share/my-ng-zorro/my-ng-zorro.module';
import {LoginLayoutComponent} from './login/login-layout/login-layout.component';
import {ShareModule} from '../share/share.module';
import {HomeComponent} from './main/home/home.component';
import {HazardousComponent} from './main/home/accident-disaster/hazardous/hazardous.component';
import {EarthquakeComponent} from './main/home/natural-disaster/earthquake/earthquake.component';
import {HazardousOneComponent} from './main/home/accident-disaster/hazardous/hazardous-one/hazardous-one.component';
import {HazardousThreeComponent} from './main/home/accident-disaster/hazardous/hazardous-three/hazardous-three.component';
import {EarthquakeThreeComponent} from './main/home/natural-disaster/earthquake/earthquake-three/earthquake-three.component';
import {EarthquakeOneComponent} from './main/home/natural-disaster/earthquake/earthquake-one/earthquake-one.component';
import {FloodDroughtOneComponent} from './main/home/natural-disaster/flood-drought/flood-drought-one/flood-drought-one.component';
import {WelcomeComponent} from './welcome/welcome.component';


@NgModule({
  declarations: [
    LoginLayoutComponent,
    HomeComponent,
    HazardousComponent,
    EarthquakeComponent,
    HazardousOneComponent,
    HazardousThreeComponent,
    EarthquakeThreeComponent,
    EarthquakeOneComponent,
    FloodDroughtOneComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    MyNgZorroModule,
  ],
  exports: []
})
export class PagesModule {
}
