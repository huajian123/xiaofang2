import {Component, OnInit} from '@angular/core';
import {DataShowModel} from "../../../../../../share/biz-component/data-show/data-show.component";
import {LoginInfoModel} from "../../../../../../core/vo-common/BusinessEnum";
import {TabObjModel} from "../../../../../../share/biz-component/biz-tabs/biz-tabs.component";
import {UserRole} from "../../../../../../VO/types";
import {EVENT_KEY} from "../../../../../../../environments/staticVariable";

@Component({
  selector: 'app-hazardous-three',
  templateUrl: './hazardous-three.component.html',
  styleUrls: ['./hazardous-three.component.less']
})
export class HazardousThreeComponent implements OnInit {
  loginInfo: LoginInfoModel;
  nameArray: string[];
  showInfo: DataShowModel = {
    linkPhone: "1131313131",
    linkPeople: '张三',
    duty: ["先做第一步", '再做第二部']
  }
  tabObj: TabObjModel[];

  constructor() {
    this.nameArray = [];
    this.tabObj = [];
  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    if (event === "启动应急响应") {
      this.tabObj = [
        {
          name: "应急管理厅1", id: 1,
          children: [
            {name: '救灾处1', id: 7},
            {
              name: '安平处1', id: 8,
              children: [
                {name: '应急管理厅1', id: 9},
                {name: '应急管理厅1', id: 10},
              ]
            }]
        },
        {name: "应急管理厅1", id: 2},
        {name: "应急管理厅2", id: 3},
        {name: "应急管理厅3", id: 4},
        {name: "应急管理厅4", id: 5},
        {name: "应急管理厅5", id: 6},
        {name: "应急管理厅5", id: 11},
        {name: "应急管理厅5", id: 12},
        {name: "应急管理厅5", id: 13},
        {name: "应急管理厅5", id: 14},
        {name: "应急管理厅5", id: 15},
      ]
    } else if (event === "保障方案") {
      this.tabObj = [
        {
          name: "应急管理厅1", id: 1,
          children: [
            {name: '救灾处1', id: 7},
            {
              name: '安平处1', id: 8,
              children: [
                {name: '应急管理厅1', id: 9},
                {name: '应急管理厅1', id: 10},
              ]
            }]
        },
      ]
    }
    console.log("当前点击的六边形的名字是：" + event);
  }

  // 获取当前选中的tabid
  getSelId(event) {
    console.log("当前点击的tab的id是：" + event);
  }

  judgRole() {
    if (this.loginInfo.role === UserRole.User) {
      this.nameArray = ['善后处理<br/>与事故调查'];
    } else if (this.loginInfo.role === UserRole.Manage) {
      this.nameArray = ['启动应急响应', '分组开展<br/>应急救援工作', '保障方案', '现场信息采集', '辅助指挥<br/>决策信息', '事态控制', '善后处理<br/>与事故调查'];
    }
  }

  ngOnInit(): void {
    this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
    this.judgRole()
  }

}
