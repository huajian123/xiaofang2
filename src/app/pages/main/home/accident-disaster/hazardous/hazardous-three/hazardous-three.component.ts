import {Component, Input, OnInit} from '@angular/core';
import {
  CitiesNameService,
  ResponsibilityEntitiesModel
} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {EmergencyModel, ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';

@Component({
  selector: 'app-hazardous-three',
  templateUrl: './hazardous-three.component.html',
  styleUrls: ['./hazardous-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class HazardousThreeComponent implements OnInit {
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
  }

}
