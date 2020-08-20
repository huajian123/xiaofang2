import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

export interface TabObjModel {
  name: string;
  id: number;
  children?: TabObjModel[];
}

@Component({
  selector: 'app-biz-tabs',
  templateUrl: './biz-tabs.component.html',
  styleUrls: ['./biz-tabs.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class BizTabsComponent implements OnInit {
  @Input() tabObj: TabObjModel[];
  @Input() currentSelFirstTabId: number;
  @Input() currentSelSecondTabId: number;
  @Input() currentSelThirdTabId: number;
  secondLevelTabArray = [];
  thirdLevelTabArray = [];
  @Output() selId: EventEmitter<number>;

  constructor() {
    this.selId = new EventEmitter<number>();
  }

  findId(tabArray, id) {
    const tabItem = tabArray.find((item) => item.id === id);
    if (!tabItem.children) {
      return id;
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

  /*  initId() {
      this.currentSelFirstTabId = 1;
      this.currentSelSecondTabId = 18;
      this.currentSelThirdTabId = 9;
    }*/

  ngOnInit(): void {
    // this.initId()
    this.secondLevelTabArray = this.tabObj[0]?.children || [];
  }

}
