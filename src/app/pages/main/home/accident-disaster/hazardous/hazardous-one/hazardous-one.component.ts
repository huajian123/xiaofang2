import {Component, Input, OnInit} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';


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
  nameArray: string[];
  tableObj: ResponsibilityModel[];

  constructor() {
    this.responsibilityData = [];
    this.nameArray = [];
    this.tableObj = [];

  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    switch (event) {
      case '启动应急响应':
        break;
      case '成立指挥部':
        break;
      case  '开展应急救援':
        break;
      case  '事态控制':
        break;
      case  '应急结束':
        break;
    }
  }

  ngOnInit(): void {
    this.nameArray = [
      '启动应急响应',
      '成立指挥部',
      '开展应急救援',
      '事态控制',
      '应急结束'
    ];
    this.tableObj = this.responsibilityData;
    this.getCurrentLeftName('启动应急响应');
  }

}
