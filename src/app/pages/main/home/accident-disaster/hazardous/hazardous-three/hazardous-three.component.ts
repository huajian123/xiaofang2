import {Component, Input, OnInit} from '@angular/core';
import {TabObjModel} from '../../../../../../share/biz-component/biz-tabs/biz-tabs.component';
import {
  CitiesNameService,
  ResponsibilityEntitiesModel
} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {getHazardousThreeTabObj} from './hazardous-three-tab-obj';
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
  nameArray: string[];
  tableObj: ResponsibilityModel[];
  level: number;

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
    this.tableObj = this.responsibilityData;
    console.log(this.tableObj);
  }

}
