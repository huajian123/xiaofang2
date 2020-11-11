import {Component, Input, OnInit} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {CitiesNameService} from '../../../../../../services/biz-services/earthquake-warning-list.service';

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
  @Input() currentPage: number;
  @Input() planId: number;
  @Input() downLoadUrl: string;
  nameArray: string[];
  tableObj: ResponsibilityModel[];
  level: number;
  levels: number;
  constructor(private dataService: CitiesNameService) {
    this.nameArray = [];
    this.tableObj = [];
  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    /* this.tableObj = getHazardousThreeTabObj(event);*/
  }


  ngOnInit(): void {
    this.level = this.currentPage;
    this.levels = this.planId;
    this.tableObj = this.responsibilityData;
    console.log(this.downLoadUrl);
  }

}
