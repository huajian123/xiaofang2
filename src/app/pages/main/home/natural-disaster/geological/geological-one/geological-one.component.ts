import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {EmergencyModel, ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {NewContentComponent} from '../../../../../../share/biz-component/new-content/new-content.component';

@Component({
  selector: 'app-geological-one',
  templateUrl: './geological-one.component.html',
  styleUrls: ['./geological-one.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class GeologicalOneComponent implements OnInit {
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
    const index = this.leftNav.find((item) => {
      return item.name === event;
    }).index;
    this.goDistance(index);
  }


  getEmergencyRoomNameArray() {
    const temp = [];
    this.emergencyRoomData.forEach(({officeName}, index) => {
      temp.push(officeName);
      this.leftNav.push({name: officeName, index: index + 1});
    });
    return temp;
  }
  goDistance(index): void {
    this['distannce' + index]?.nativeElement.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'start'
    });
    this.tableContent.goDistance(index);
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
    this.levels = this.planId;
    this.emergencyObj = this.emergencyRoomData;
    this.tableObj = this.responsibilityData;
    this.emergencyRoomNameArray = this.getEmergencyRoomNameArray();

  }
}
