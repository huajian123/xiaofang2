import {Component, OnInit} from '@angular/core';
import {LoginInfoModel} from 'src/app/core/vo-common/BusinessEnum';
import {EVENT_KEY} from '../../../../../../../environments/staticVariable';
import {UserRole} from '../../../../../../VO/types';
import {TabObjModel} from '../../../../../../share/biz-component/biz-tabs/biz-tabs.component';
import {getHazardousOneTabObj} from './hazardous-one-tab-obj';
import {
  CitiesNameService,
  ResponsibilityEntitiesModel
} from '../../../../../../services/biz-services/earthquake-warning-list.service';

@Component({
  selector: 'app-hazardous-one',
  templateUrl: './hazardous-one.component.html',
  styleUrls: ['./hazardous-one.component.less']
})
export class HazardousOneComponent implements OnInit {
  loginInfo: LoginInfoModel;
  nameArray: string[];
  firstSelTabOneLevelId: number;
  firstSelTabTwoLevelId: number;
  firstSelTabThreeLevelId: number;
  showInfo: ResponsibilityEntitiesModel;
  tabObj: TabObjModel[];
  cityName: string;

  constructor(private dataService: CitiesNameService) {
    this.cityName = '';
    this.showInfo = {
      linkman: '',
      linkPhone: '',
      responsibilityDetailSort: []
    };
    this.nameArray = [];
    this.tabObj = [];
    this.firstSelTabOneLevelId = null;
    this.firstSelTabTwoLevelId = null;
    this.firstSelTabThreeLevelId = null;
  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    // 获取对应左侧六变形的tab页签
    this.tabObj = getHazardousOneTabObj(event);
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

  // 获取当前选中的tabId
  getSelId(event) {
    // event就是选中的tabId调用接口后获得
    this.dataService.getGroupInfo({id: event, cityName: this.cityName}).subscribe(res => {
      this.showInfo = res.selectResponsibilityDTO;
    });
  }

  // 判断角色
  judgRole() {
    if (this.loginInfo.role === UserRole.User) {
      this.nameArray = [
        '启动应急响应',
        '组建现场<br/>指挥部',
        '分组开展<br/>应急救援工作',
        '现场信息采集',
        '应急保障',
        '事态控制',
        '善后处理<br/>与事故调查'
      ];
      this.getCurrentLeftName('启动应急响应');
    } else if (this.loginInfo.role === UserRole.Manage) {
      this.nameArray = [
        '省级接警',
        '预警监测',
        '信息研判',
        '信息上报',
        '先期处置',
        '启动应急响应',
        '分组开展<br/>应急救援工作',
        '救援力量<br/>调度及保障',
        '应急物资<br/>调度及保障',
        '通信电力<br/>保障方案',
        '现场信息采集',
        '辅助指挥<br/>决策信息',
        '事态控制',
        '善后处理<br/>与事故调查'
      ];
      this.getCurrentLeftName('省级接警');
    }
    // 页面初始化时获取的岗位职责信息
    this.getSelId(this.firstSelTabThreeLevelId || this.firstSelTabTwoLevelId || this.firstSelTabOneLevelId);
  }


  ngOnInit(): void {
    this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
    this.judgRole();
  }

}
