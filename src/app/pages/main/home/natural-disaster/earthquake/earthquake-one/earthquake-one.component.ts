import {Component, OnInit} from '@angular/core';
import {LoginInfoModel} from '../../../../../../core/vo-common/BusinessEnum';
import {CitiesNameService, ResponsibilityEntitiesModel} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {TabObjModel} from '../../../../../../share/biz-component/biz-tabs/biz-tabs.component';
import {UserRole} from '../../../../../../VO/types';
import {EVENT_KEY} from '../../../../../../../environments/staticVariable';
import {getEarthquakeOneTabObj} from './earthquake-one-tab-obj';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';


@Component({
  selector: 'app-earthquake-one',
  templateUrl: './earthquake-one.component.html',
  styleUrls: ['./earthquake-one.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class EarthquakeOneComponent implements OnInit {
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
    // 获取对应左侧六变形的tab页签
    this.tabObj = getEarthquakeOneTabObj(event);
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
/*  getSelId(event) {
    // event就是选中的tabId调用接口后获得
    this.dataService.getGroupInfo({id: event, cityName: this.cityName}).subscribe(res => {
      this.showInfo = res.selectResponsibilityDTO;
    });
  }*/

  // 判断角色
  judgRole() {
    if (this.loginInfo.role === UserRole.User) {
      this.nameArray = [
        '启动应急响应',
        '组建现场<br/>指挥部',
        '分组开展<br/>应急救援工作',
        '应急保障',
        '辅助指挥<br/>决策一张图',
        '现场信息采集',
        '事态控制',
        '善后处理<br/>与事故调查'
      ];
      this.getCurrentLeftName('启动应急响应');
    } else if (this.loginInfo.role === UserRole.Manage) {
      this.nameArray = [
        '省级接警',
        '预警监测',
        '灾情研判分析',
        '应急响应建议',
        '信息上报',
        '先期处置',
        '启动应急响应',
        '分组开展<br/>应急救援工作',
        '救援力量<br/>投入方案',
        '通信保障<br/>方案',
        '救灾资金<br/>物资支持方案',
        '发布救灾<br/>捐赠公告',
        '新闻方案',
        '辅助指挥<br/>决策一张图',
        '现场信息采集',
        '事态控制',
        '善后处理<br/>与事故调查'
      ];
      this.getCurrentLeftName('省级接警');
    }
    // 页面初始化时获取的岗位职责信息
    //  this.getSelId(this.firstSelTabThreeLevelId || this.firstSelTabTwoLevelId || this.firstSelTabOneLevelId);
  }


  ngOnInit(): void {
    this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
    this.judgRole();
  }
}
