import {Component, OnInit} from '@angular/core';
import {LoginInfoModel} from '../../../../../../core/vo-common/BusinessEnum';
import {CitiesNameService, ResponsibilityEntitiesModel} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {TabObjModel} from '../../../../../../share/biz-component/biz-tabs/biz-tabs.component';
import {UserRole} from '../../../../../../VO/types';
import {EVENT_KEY} from '../../../../../../../environments/staticVariable';
import {getEarthquakeThreeTabObj} from './earthquake-three-tab-obj';

@Component({
  selector: 'app-earthquake-three',
  templateUrl: './earthquake-three.component.html',
  styleUrls: ['./earthquake-three.component.less']
})
export class EarthquakeThreeComponent implements OnInit {
  loginInfo: LoginInfoModel;
  firstSelTabOneLevelId: number;
  firstSelTabTwoLevelId: number;
  firstSelTabThreeLevelId: number;
  nameArray: string[];
  showInfo: ResponsibilityEntitiesModel;
  tabObj: TabObjModel[];
  cityName: string;

  constructor(private dataService: CitiesNameService) {
    this.cityName = '';
    this.showInfo = {
      linkman: '',
      linkPhone: '',
      responsibilityDetailSort: [],
      beforeResponsibilityNameSort: [],
      responsibilityNameSort: []
    };
    this.nameArray = [];
    this.tabObj = [];
    this.firstSelTabOneLevelId = null;
    this.firstSelTabTwoLevelId = null;
    this.firstSelTabThreeLevelId = null;
  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    this.tabObj = getEarthquakeThreeTabObj(event);
    this.firstSelTabOneLevelId = this.tabObj[0].id;
    if (this.tabObj[0].children) {
      this.firstSelTabTwoLevelId = this.tabObj[0].children[0].id;
      if (this.tabObj[0].children[0].children) {
        this.firstSelTabThreeLevelId = this.tabObj[0].children[0].children[0].id;
      } else {
        this.firstSelTabThreeLevelId = null;
      }
    } else {
      this.firstSelTabTwoLevelId = null;
      this.firstSelTabThreeLevelId = null;
    }
  }

  // 获取当前选中的tabid
  getSelId(event) {
    this.dataService.getGroupInfo({id: event, cityName: this.cityName}).subscribe(res => {
      this.showInfo = res.selectResponsibilityDTO;
    });
  }

  judgRole() {
    this.nameArray = ['先期处置', '事故信息接收', '应急指导', '灾情报送', '应急处置'];
    if (this.loginInfo.role === UserRole.User) {
      /* this.nameArray = ['善后处理<br/>与事故调查'];*/
    } else if (this.loginInfo.role === UserRole.Manage) {
      /* this.nameArray = ['事故信息接收', '应急指导'];*/
    }
    this.getCurrentLeftName('先期处置');
    // 页面初始化时获取的岗位职责信息
    this.getSelId(this.firstSelTabThreeLevelId || this.firstSelTabTwoLevelId || this.firstSelTabOneLevelId);
  }

  ngOnInit(): void {
    this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
    this.judgRole();
  }
}
