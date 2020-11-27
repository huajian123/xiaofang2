import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {EmergencyModel, ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {NewContentComponent} from '../../../../../../share/biz-component/new-content/new-content.component';

@Component({
  selector: 'app-pollution-weather-two',
  templateUrl: './pollution-weather-two.component.html',
  styleUrls: ['./pollution-weather-two.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class PollutionWeatherTwoComponent implements OnInit {
  @Input() responsibilityData: ResponsibilityModel[];
  @Input() planId: number;
  @Input() emergencyRoomData: EmergencyModel[];
  @Input() downLoadUrl: string;
  isShows: boolean;
  emergencyObj: EmergencyModel[];
  levels: number;
  emergencyRoomNameArray: string[];
  @ViewChild(NewContentComponent) tableContent: NewContentComponent;

  constructor() {
    this.responsibilityData = [];
    this.emergencyObj = [];
    this.emergencyRoomNameArray = [];
    this.isShows = true;
  }

  ngOnInit(): void {
    this.levels = this.planId;
    this.emergencyObj = this.emergencyRoomData;
  }
}
