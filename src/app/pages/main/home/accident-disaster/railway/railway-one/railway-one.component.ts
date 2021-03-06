import {Component, Input, OnInit} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {EmergencyModel, ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {CitiesNameService} from '../../../../../../services/biz-services/earthquake-warning-list.service';

@Component({
  selector: 'app-railway-one',
  templateUrl: './railway-one.component.html',
  styleUrls: ['./railway-one.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class RailwayOneComponent implements OnInit {

  @Input() responsibilityData: ResponsibilityModel[];
  @Input() currentPage: number;
  @Input() planId: number;
  @Input() downLoadUrl: string;
  @Input() emergencyRoomData: EmergencyModel[];
  nameArray: string[];
  tableObj: ResponsibilityModel[];
  level: number;
  levels: number;
  emergencyObj: EmergencyModel[];

  constructor(private dataService: CitiesNameService) {
    this.nameArray = [];
    this.tableObj = [];
    this.emergencyObj = [];
  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    /* this.tableObj = getHazardousThreeTabObj(event);*/
  }


  ngOnInit(): void {
    this.level = this.currentPage;
    this.levels = this.planId;
    this.tableObj = this.responsibilityData;
    this.emergencyObj = this.emergencyRoomData;
  }

}
