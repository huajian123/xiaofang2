import {Component, Input, OnInit} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {
  EmergencyModel,
  ResponsibilityModel,
  TeamResponsibilityDTO
} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {CitiesNameService} from '../../../../../../services/biz-services/earthquake-warning-list.service';

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
  @Input() emergencyRoomData: EmergencyModel[];
  @Input() responsibilityData: ResponsibilityModel[];
  @Input() currentPage: number;
  @Input() planId: number;
  @Input() rowspanNum: number;
  @Input() downLoadUrl: string;
  nameArray: string[];
  TableDataModel: TableDataModel[];
  level: number;
  levels: number;

  constructor(private dataService: CitiesNameService) {
    this.nameArray = [];
  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    /* this.tableObj = getHazardousThreeTabObj(event);*/
  }


  ngOnInit(): void {
    this.level = this.currentPage;
    this.levels = this.planId;
    this.TableDataModel = this.responsibilityData;
    this.TableDataModel.forEach(item => {
      if (item.responsibilityDetail.length === 0 && item.selectTeamResponsibilityDTO !== null) {
        item.isGroup = true;
      }
    });
  }

}
