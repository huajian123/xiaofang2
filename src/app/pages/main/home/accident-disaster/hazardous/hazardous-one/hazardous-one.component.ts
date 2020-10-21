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
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';

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
        '成立指挥部',
        '开展应急救援',
        '事态控制',
        '应急结束'
      ];
      this.getCurrentLeftName('启动应急响应');
    } else if (this.loginInfo.role === UserRole.Manage) {
      this.nameArray = [
        '启动应急响应',
        '成立指挥部',
        '开展应急救援',
        '事态控制',
        '应急结束'
      ];
      this.getCurrentLeftName('启动应急响应');
    }
    // 页面初始化时获取的岗位职责信息
    // this.getSelId(this.firstSelTabThreeLevelId || this.firstSelTabTwoLevelId || this.firstSelTabOneLevelId);
  }


  ngOnInit(): void {
    this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
    this.judgRole();
  }

}
