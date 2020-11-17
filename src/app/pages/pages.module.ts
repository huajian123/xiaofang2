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
import {WelcomeComponent} from './welcome/welcome.component';
import {TyphoonOneComponent} from './main/home/natural-disaster/typhoon/typhoon-one/typhoon-one.component';
import {TyphoonThreeComponent} from './main/home/natural-disaster/typhoon/typhoon-three/typhoon-three.component';
import {TyphoonComponent} from './main/home/natural-disaster/typhoon/typhoon.component';
import {ForestFireComponent} from './main/home/natural-disaster/forest-fire/forest-fire.component';
import {ForestFireOneComponent} from './main/home/natural-disaster/forest-fire/forest-fire-one/forest-fire-one.component';
import {ForestFireThreeComponent} from './main/home/natural-disaster/forest-fire/forest-fire-three/forest-fire-three.component';
import { PollutionWeatherComponent } from './main/home/accident-disaster/pollution-weather/pollution-weather.component';
import { PollutionWeatherOneComponent } from './main/home/accident-disaster/pollution-weather/pollution-weather-one/pollution-weather-one.component';
import { PollutionWeatherThreeComponent } from './main/home/accident-disaster/pollution-weather/pollution-weather-three/pollution-weather-three.component';


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
    WelcomeComponent,
    TyphoonOneComponent,
    TyphoonThreeComponent,
    TyphoonComponent,
    ForestFireComponent,
    ForestFireOneComponent,
    ForestFireThreeComponent,
    PollutionWeatherComponent,
    PollutionWeatherOneComponent,
    PollutionWeatherThreeComponent,
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
