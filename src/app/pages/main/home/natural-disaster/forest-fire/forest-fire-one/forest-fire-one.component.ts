import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {EmergencyModel, ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {NewContentComponent} from '../../../../../../share/biz-component/new-content/new-content.component';

@Component({
  selector: 'app-forest-fire-one',
  templateUrl: './forest-fire-one.component.html',
  styleUrls: ['./forest-fire-one.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class ForestFireOneComponent implements OnInit {
  @Input() responsibilityData: ResponsibilityModel[];
  @Input() currentPage: number;
  @Input() planId: number;
  @Input() emergencyRoomData: EmergencyModel[];
  @Input() rowspanNum: number;
  @Input() downLoadUrl: string;
  @ViewChild('distannce1') distannce1: ElementRef;
  @ViewChild('distannce2') distannce2: ElementRef;
  @ViewChild('distannce3') distannce3: ElementRef;
  @ViewChild('distannce4') distannce4: ElementRef;
  @ViewChild('distannce5') distannce5: ElementRef;
  @ViewChild('distannce6') distannce6: ElementRef;
  @ViewChild('distannce7') distannce7: ElementRef;

  isCurrProcess: boolean;
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
      {name: '发布响应通知', index: 1},
      {name: '成立指挥部', index: 2},
      {name: '启动应急响应', index: 3},
      {name: '开展应急救援', index: 4},
      {name: '林火监测', index: 5},
      {name: '综合保障', index: 6},
      {name: '应急终止', index: 7},
    ];
    this.isCurrProcess = true;
  }

  // 左侧tab切换
  changeState(event) {
    this.isCurrProcess = event;
  }

  getCurrentLeftName(event) {
    const index = this.leftNav.find((item) => {
      return item.name === event;
    }).index;
    this.goDistance(index);
  }

  goDistance(index): void {
    this['distannce' + index]?.nativeElement.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'start'
    });
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
      '发布响应通知',
      '成立指挥部',
      '启动应急响应',
      '开展应急救援',
      '林火监测',
      '综合保障',
      '应急终止',
    ];
    this.level = this.currentPage;
    this.levels = this.planId;
    this.emergencyObj = this.emergencyRoomData;
    this.tableObj = this.responsibilityData;
    this.emergencyRoomNameArray = this.getEmergencyRoomNameArray();

  }
}
