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
import {TyphoonOneComponent} from './main/home/natural-disaster/typhoon/typhoon-one/typhoon-one.component';
import {TyphoonThreeComponent} from './main/home/natural-disaster/typhoon/typhoon-three/typhoon-three.component';
import {FloodDroughtThreeComponent} from './main/home/natural-disaster/flood-drought/flood-drought-three/flood-drought-three.component';
import {TyphoonComponent} from './main/home/natural-disaster/typhoon/typhoon.component';
import {FloodDroughtComponent} from './main/home/natural-disaster/flood-drought/flood-drought.component';
import {ForestFireComponent} from './main/home/natural-disaster/forest-fire/forest-fire.component';
import {ForestFireOneComponent} from './main/home/natural-disaster/forest-fire/forest-fire-one/forest-fire-one.component';
import {ForestFireThreeComponent} from './main/home/natural-disaster/forest-fire/forest-fire-three/forest-fire-three.component';


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
    TyphoonOneComponent,
    TyphoonThreeComponent,
    FloodDroughtThreeComponent,
    TyphoonComponent,
    FloodDroughtComponent,
    ForestFireComponent,
    ForestFireOneComponent,
    ForestFireThreeComponent,
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
