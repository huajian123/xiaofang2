import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

export interface TabObjModel {
  name: string;
  id: number;
  children?: TabObjModel[]
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

  findId(tabObj) {
    if (tabObj.children) {
      return this.findId(tabObj.children[0]);
    } else {
      return tabObj.id;
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
    const selId = this.findId(tabItem)
    console.log(this.tabObj);
    console.log(selId);
    this.selId.emit(tabItem.id);
  }

  ngOnInit(): void {
    this.secondLevelTabArray = this.tabObj[0]?.children || [];
  }

}
