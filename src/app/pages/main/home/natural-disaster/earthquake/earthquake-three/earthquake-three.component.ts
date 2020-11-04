import {Component, Input, OnInit} from '@angular/core';
import {LoginInfoModel} from '../../../../../../core/vo-common/BusinessEnum';
import {CitiesNameService, ResponsibilityEntitiesModel} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {TabObjModel} from '../../../../../../share/biz-component/biz-tabs/biz-tabs.component';
import {UserRole} from '../../../../../../VO/types';
import {EVENT_KEY} from '../../../../../../../environments/staticVariable';
import {getEarthquakeThreeTabObj} from './earthquake-three-tab-obj';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {ResponsibilityModel} from "../../../../../../services/biz-services/accident-disasters-list.service";

@Component({
  selector: 'app-earthquake-three',
  templateUrl: './earthquake-three.component.html',
  styleUrls: ['./earthquake-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class EarthquakeThreeComponent implements OnInit {
  @Input() responsibilityData: ResponsibilityModel[];
  @Input() currentPage: number;
  @Input() downLoadUrl: string;
  nameArray: string[];
  tableObj: ResponsibilityModel[];
  level: number;

  constructor(private dataService: CitiesNameService) {
    this.nameArray = [];
    this.tableObj = [];
  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {

  }

  // 获取当前选中的tabid
/*  getSelId(event) {
    this.dataService.getGroupInfo({id: event, cityName: this.cityName}).subscribe(res => {
      this.showInfo = res.selectResponsibilityDTO;
    });
  }*/


  ngOnInit(): void {
    this.level = this.currentPage;
    this.tableObj = this.responsibilityData;
    console.log(this.tableObj);
  }
}
