import {Component, Input, OnInit} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {
  EmergencyModel,
  ResponsibilityModel
} from '../../../../../../services/biz-services/accident-disasters-list.service';


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
  nameArray: string[];
  tableObj: ResponsibilityModel[];
  level: number;
  emergencyRoomNameArray: string[];

  constructor() {
    this.responsibilityData = [];
    this.nameArray = [];
    this.tableObj = [];
    this.emergencyRoomNameArray = [];

  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    switch (event) {
      case '启动应急响应':
        console.log('启动应急响应');
        break;
      case '成立指挥部':
        console.log('成立指挥部');
        break;
      case  '开展应急救援':
        console.log('开展应急救援');
        break;
      case  '事态控制':
        console.log('事态控制');
        break;
      case  '应急结束':
        console.log('应急结束');
        break;
    }
  }

  getEmergencyRoomNameArray() {
    const temp = [];
    this.emergencyRoomData.forEach(({officeName}) => {
      temp.push(officeName);
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
    this.tableObj = this.responsibilityData;
    this.getCurrentLeftName('启动应急响应');
    this.emergencyRoomNameArray = this.getEmergencyRoomNameArray();
  }

}
