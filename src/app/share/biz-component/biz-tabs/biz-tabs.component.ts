import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-biz-tabs',
  templateUrl: './biz-tabs.component.html',
  styleUrls: ['./biz-tabs.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class BizTabsComponent implements OnInit {
  currentSelFirstTabId: number;
  currentSelSecondTabId: number;
  currentSelThirdTabId: number;
  tabObj = [
    {
      name: "应急管理厅", id: 1,
      children: [
        {name: '救灾处', id: 7},
        {
          name: '安平处', id: 8,
          children: [
            {name: '应急管理厅', id: 9},
            {name: '应急管理厅', id: 10},
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
  secondLevelTabArray = [];
  thirdLevelTabArray = [];
  @Output() selId: EventEmitter<number>;

  constructor() {
    this.selId = new EventEmitter<number>();
    this.secondLevelTabArray = this.tabObj[0]?.children || [];
  }

  findId(tabArray, id) {
    const tabItem = tabArray.find((item) => item.id === id);
    if (!tabItem.children) {
      return id
    }
  }

  chooseTab(tabItem, level) {
    if (level === 1) {
      this.currentSelFirstTabId = tabItem.id;
      this.secondLevelTabArray = tabItem.children || [];
    } else if (level === 2) {
      this.currentSelSecondTabId = tabItem.id;
      this.thirdLevelTabArray = tabItem.children || [];
    } else {
      this.currentSelThirdTabId = tabItem.id;
    }
    this.selId.emit(tabItem.id);
  }

  initId() {
    this.currentSelFirstTabId = 1;
    this.currentSelSecondTabId = 7;
    this.currentSelThirdTabId = 9;
  }

  ngOnInit(): void {
    this.initId()
  }

}
