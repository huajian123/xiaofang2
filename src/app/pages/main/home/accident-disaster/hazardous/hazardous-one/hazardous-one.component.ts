import {Component, OnInit} from '@angular/core';
import {DataShowModel} from '../../../../../../share/biz-component/data-show/data-show.component';
import {LoginInfoModel} from 'src/app/core/vo-common/BusinessEnum';
import {EVENT_KEY} from '../../../../../../../environments/staticVariable';
import {UserRole} from '../../../../../../VO/types';
import {TabObjModel} from '../../../../../../share/biz-component/biz-tabs/biz-tabs.component';
import {getHazardousTabObj} from './tabObj';

@Component({
  selector: 'app-hazardous-one',
  templateUrl: './hazardous-one.component.html',
  styleUrls: ['./hazardous-one.component.less']
})
export class HazardousOneComponent implements OnInit {
  loginInfo: LoginInfoModel;
  nameArray: string[];
  showInfo: DataShowModel = {
    linkPhone: '1131313131',
    linkPeople: '张三',
    duty: ['先做第一步', '再做第二部']
  }
  tabObj: TabObjModel[];

  constructor() {
    this.nameArray = [];
    this.tabObj = [];
  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    //获取对应左侧六变形的tab页签
    this.tabObj = getHazardousTabObj(event)
  }

  // 获取当前选中的tabid
  getSelId(event) {
    console.log('当前点击的tab的id是：' + event);
    // 调用接口后获得
    this.showInfo = {
      linkPhone: '1131313131',
      linkPeople: '张三',
      duty: ['先做第一步', '再做第二部']
    }
  }

  // 判断角色
  judgRole() {
    if (this.loginInfo.role === UserRole.User) {
      this.nameArray = ['善后处理<br/>与事故调查'];
      this.getCurrentLeftName('善后处理与事故调查');
      // 页面初始化时获取的岗位职责信息
      this.getSelId(7);
    } else if (this.loginInfo.role === UserRole.Manage) {
      this.nameArray = ['启动应急响应', '分组开展<br/>应急救援工作', '保障方案', '现场信息采集', '辅助指挥<br/>决策信息', '事态控制', '善后处理<br/>与事故调查'];
      this.getCurrentLeftName('启动应急响应');
      // 页面初始化时获取的岗位职责信息
      this.getSelId(18);
    }
  }

  ngOnInit(): void {
    this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
    this.judgRole();
  }

}
