import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {EmergencyModel, ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {NewContentComponent} from '../../../../../../share/biz-component/new-content/new-content.component';

@Component({
  selector: 'app-meteorological-one',
  templateUrl: './meteorological-one.component.html',
  styleUrls: ['./meteorological-one.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class MeteorologicalOneComponent implements OnInit {
  @Input() responsibilityData: ResponsibilityModel[];
  @Input() currentPage: number;
  @Input() planId: number;
  @Input() emergencyRoomData: EmergencyModel[];
  @Input() rowspanNum: number;
  @Input() downLoadUrl: string;
  isCurrProcess: boolean;
  isShows: boolean;
  nameArray: string[];
  tableObj: ResponsibilityModel[];
  emergencyObj: EmergencyModel[];
  level: number;
  levels: number;
  emergencyRoomNameArray: string[];
  @ViewChild(NewContentComponent) tableContent: NewContentComponent;
  leftNav: { name: string, index: number }[];

  constructor() {
    this.responsibilityData = [];
    this.nameArray = [];
    this.tableObj = [];
    this.emergencyObj = [];
    this.emergencyRoomNameArray = [];
    this.leftNav = [
      {name: '启动应急响应', index: 1},
      {name: '应急响应措施', index: 2},
    ];
    this.isCurrProcess = true;
    this.isShows = true;
  }

  // 左侧tab切换
  changeState(event) {
    this.isCurrProcess = event;
  }

  getCurrentLeftName(event) {
    const index = this.leftNav.find((item) => {
      return item.name === event;
    }).index;
    this.tableContent.goDistance(index);
  }

  getEmergencyRoomNameArray() {
    const temp = [];
    this.emergencyRoomData.forEach(({officeName}, index) => {
      temp.push(officeName);
      this.leftNav.push({name: officeName, index: index + 1});
    });
    return temp;
  }

  ngOnInit(): void {
    this.nameArray = [
      '启动应急响应',
      '应急响应措施',
    ];
    this.level = this.currentPage;
    this.levels = this.planId;
    this.emergencyObj = this.emergencyRoomData;
    this.tableObj = this.responsibilityData;
    this.emergencyRoomNameArray = this.getEmergencyRoomNameArray();
  }
}
