import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {
  EmergencyModel,
  ResponsibilityModel,
  TeamResponsibilityDTO
} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {CitiesNameService} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {NewContentComponent} from '../../../../../../share/biz-component/new-content/new-content.component';

export interface TableDataModel {
  responsibility: string;
  department: string;
  responsibilityDetail: string[];
  selectTeamResponsibilityDTO: TeamResponsibilityDTO[];
  isGroup?: boolean;
}

@Component({
  selector: 'app-pollution-weather-three',
  templateUrl: './pollution-weather-three.component.html',
  styleUrls: ['./pollution-weather-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class PollutionWeatherThreeComponent implements OnInit {
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
