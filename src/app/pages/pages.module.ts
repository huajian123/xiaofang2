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
import {PollutionWeatherComponent} from './main/home/accident-disaster/pollution-weather/pollution-weather.component';
import {PollutionWeatherOneComponent} from './main/home/accident-disaster/pollution-weather/pollution-weather-one/pollution-weather-one.component';
import {PollutionWeatherThreeComponent} from './main/home/accident-disaster/pollution-weather/pollution-weather-three/pollution-weather-three.component';
import {ProductionSafetyOneComponent} from './main/home/accident-disaster/production-safety/production-safety-one/production-safety-one.component';
import {ProductionSafetyThreeComponent} from './main/home/accident-disaster/production-safety/production-safety-three/production-safety-three.component';
import {ProductionSafetyComponent} from './main/home/accident-disaster/production-safety/production-safety.component';
import {FloodDroughtComponent} from './main/home/natural-disaster/flood-drought/flood-drought.component';
import {FloodDroughtOneComponent} from './main/home/natural-disaster/flood-drought/flood-drought-one/flood-drought-one.component';
import {FloodDroughtThreeComponent} from './main/home/natural-disaster/flood-drought/flood-drought-three/flood-drought-three.component';
import {MajorFireComponent} from './main/home/accident-disaster/major-fire/major-fire.component';
import {MajorFireOneComponent} from './main/home/accident-disaster/major-fire/major-fire-one/major-fire-one.component';
import {MajorFireThreeComponent} from './main/home/accident-disaster/major-fire/major-fire-three/major-fire-three.component';
import {GeologicalComponent} from './main/home/natural-disaster/geological/geological.component';
import {GeologicalOneComponent} from './main/home/natural-disaster/geological/geological-one/geological-one.component';
import {GeologicalThreeComponent} from './main/home/natural-disaster/geological/geological-three/geological-three.component';
import {EnvironmentalEmergencyComponent} from './main/home/accident-disaster/environmental-emergency/environmental-emergency.component';
import {EnvironmentalEmergencyOneComponent} from './main/home/accident-disaster/environmental-emergency/environmental-emergency-one/environmental-emergency-one.component';
import {EnvironmentalEmergencyThreeComponent} from './main/home/accident-disaster/environmental-emergency/environmental-emergency-three/environmental-emergency-three.component';
import {EnvironmentalEmergencyTableOneComponent} from './main/home/accident-disaster/environmental-emergency/environmental-emergency-table-one/environmental-emergency-table-one.component';
import {RailwayComponent} from './main/home/accident-disaster/railway/railway.component';
import {RailwayOneComponent} from './main/home/accident-disaster/railway/railway-one/railway-one.component';
import {RailwayTableComponent} from './main/home/accident-disaster/railway/railway-table/railway-table.component';
import {SpecialEquipmentComponent} from './main/home/accident-disaster/special-equipment/special-equipment.component';
import {SpecialEquipmentOneComponent} from './main/home/accident-disaster/special-equipment/special-equipment-one/special-equipment-one.component';
import {MeteorologicalComponent} from './main/home/natural-disaster/meteorological/meteorological.component';
import {MeteorologicalOneComponent} from './main/home/natural-disaster/meteorological/meteorological-one/meteorological-one.component';
// tslint:disable-next-line:max-line-length
import {MeteorologicalThreeComponent} from './main/home/natural-disaster/meteorological/meteorological-three/meteorological-three.component';
import {DisasterReliefComponent} from './main/home/natural-disaster/disaster-relief/disaster-relief.component';
import {DisasterReliefOneComponent} from './main/home/natural-disaster/disaster-relief/disaster-relief-one/disaster-relief-one.component';
import {DisasterReliefThreeComponent} from './main/home/natural-disaster/disaster-relief/disaster-relief-three/disaster-relief-three.component';
import { PollutionWeatherTwoComponent } from './main/home/accident-disaster/pollution-weather/pollution-weather-two/pollution-weather-two.component';
import { ForestFireFourComponent } from './main/home/natural-disaster/forest-fire/forest-fire-four/forest-fire-four.component';
import { SpecialEquipmentThreeComponent } from './main/home/accident-disaster/special-equipment/special-equipment-three/special-equipment-three.component';
import { RailwayThreeComponent } from './main/home/accident-disaster/railway/railway-three/railway-three.component';


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
    ProductionSafetyOneComponent,
    ProductionSafetyThreeComponent,
    ProductionSafetyComponent,
    FloodDroughtComponent,
    FloodDroughtOneComponent,
    FloodDroughtThreeComponent,
    MajorFireComponent,
    MajorFireOneComponent,
    MajorFireThreeComponent,
    GeologicalComponent,
    GeologicalOneComponent,
    GeologicalThreeComponent,
    EnvironmentalEmergencyComponent,
    EnvironmentalEmergencyOneComponent,
    EnvironmentalEmergencyThreeComponent,
    EnvironmentalEmergencyTableOneComponent,
    RailwayComponent,
    RailwayOneComponent,
    RailwayTableComponent,
    SpecialEquipmentComponent,
    SpecialEquipmentOneComponent,
    MeteorologicalComponent,
    MeteorologicalOneComponent,
    MeteorologicalThreeComponent,
    DisasterReliefComponent,
    DisasterReliefOneComponent,
    DisasterReliefThreeComponent,
    PollutionWeatherTwoComponent,
    ForestFireFourComponent,
    SpecialEquipmentThreeComponent,
    RailwayThreeComponent,
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
