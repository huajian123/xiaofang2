import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {
  EmergencyModel,
  ResponsibilityModel
} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {NewContentComponent} from '../../../../../../share/biz-component/new-content/new-content.component';


@Component({
  selector: 'app-hazardous-one',
  templateUrl: './hazardous-one.component.html',
  styleUrls: ['./hazardous-one.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class HazardousOneComponent implements OnInit {
  @Input() responsibilityData: ResponsibilityModel[];
  @Input() currentPage: number;
  @Input() emergencyRoomData: EmergencyModel[];
  isCurrProcess: boolean;
  nameArray: string[];
  tableObj: ResponsibilityModel[];
  emergencyObj: EmergencyModel[];
  level: number;
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
      {name: '成立指挥部', index: 2},
      {name: '开展应急救援', index: 3},
      {name: '事态控制', index: 4},
      {name: '应急结束', index: 5},
    ];
    this.isCurrProcess = true;
  }

  // 左侧tab切换
  changeState(event) {
    this.isCurrProcess = event;
  }

  getCurrentLeftName(event) {
    console.log(this.leftNav);
    const index = this.leftNav.find((item) => {
      return item.name === event;
    }).index;
    this.tableContent.goDistance(index);
    /* switch (event) {
       case '启动应急响应':
         this.tableContent.goDistance(1);
         break;
       case '成立指挥部':
         this.tableContent.goDistance(2);
         break;
       case  '开展应急救援':
         this.tableContent.goDistance(3);
         break;
       case  '事态控制':
         this.tableContent.goDistance(4);
         break;
       case  '应急结束':
         break;
     }*/
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
      '成立指挥部',
      '开展应急救援',
      '事态控制',
      '应急结束'
    ];
    this.level = this.currentPage;
    this.emergencyObj = this.emergencyRoomData;
    this.tableObj = this.responsibilityData;
    this.emergencyRoomNameArray = this.getEmergencyRoomNameArray();
  }

}
