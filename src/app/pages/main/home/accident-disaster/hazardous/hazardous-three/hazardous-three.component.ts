import { Component, OnInit } from '@angular/core';
import {DataShowModel} from "../../../../../../share/biz-component/data-show/data-show.component";

@Component({
  selector: 'app-hazardous-three',
  templateUrl: './hazardous-three.component.html',
  styleUrls: ['./hazardous-three.component.less']
})
export class HazardousThreeComponent implements OnInit {
  nameArray = ['启动应急响应', '分组开展<br/>应急救援工作', '保障方案', '现场信息采集', '辅助指挥<br/>决策信息', '事态控制', '善后处理<br/>与事故调查'];
  showInfo:DataShowModel={
    linkPhone:"1131313131",
    linkPeople:'张三',
    duty:["先做第一步",'再做第二部']
  }
  constructor() { }
  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    console.log("当前点击的六边形的名字是："+event);
  }

  // 获取当前选中的tabid
  getSelId(event){
    console.log("当前点击的tab的id是："+event);
  }
  ngOnInit(): void {
  }

}
