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
  constructor() {
    this.responsibilityData = [];
    this.nameArray = [];
    this.tableObj = [];
    this.emergencyObj = [];
    this.emergencyRoomNameArray = [];
    this.isCurrProcess = true;
  }

  // 左侧tab切换
  changeState(event) {
    this.isCurrProcess = event;
  }

  getCurrentLeftName(event) {
    switch (event) {
      case '启动应急响应':
        console.log('启动应急响应');
        this.tableContent.goDistance(1);
        break;
      case '成立指挥部':
        console.log('成立指挥部');
        this.tableContent.goDistance(2);
        break;
      case  '开展应急救援':
        console.log('开展应急救援');
        this.tableContent.goDistance(3);
        break;
      case  '事态控制':
        console.log('事态控制');
        this.tableContent.goDistance(4);
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
    this.emergencyObj = this.emergencyRoomData;
    this.tableObj = this.responsibilityData;
    this.emergencyRoomNameArray = this.getEmergencyRoomNameArray();
  }

}
