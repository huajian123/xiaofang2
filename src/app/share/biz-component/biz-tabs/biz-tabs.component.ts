import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

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
export class BizTabsComponent implements OnInit, OnChanges {
  @Input() tabObj: TabObjModel[];
  @Input() currentSelFirstTabId: number;
  @Input() currentSelSecondTabId: number;
  @Input() currentSelThirdTabId: number;
  secondLevelTabArray = [];
  thirdLevelTabArray = [];
  @Output() selId: EventEmitter<number>;

  constructor(private cdr: ChangeDetectorRef) {
    this.selId = new EventEmitter<number>();
  }

  findId(tabObj) {
    if (tabObj.children) {
      return this.findId(tabObj.children[0]);
    } else {
      return tabObj.id;
    }
  }

  chooseTab(tabItem: TabObjModel, level) {
    if (level === 1) {
      this.currentSelFirstTabId = tabItem.id;
      if (tabItem.children) {
        this.currentSelSecondTabId = tabItem.children[0].id
        // 存放2级tab数组
        this.secondLevelTabArray = tabItem.children
        if (tabItem.children[0].children) {
          this.currentSelThirdTabId = tabItem.children[0].children[0].id;
          // 存放3级tab数组
          this.thirdLevelTabArray = tabItem.children[0].children;
        } else {
          this.currentSelThirdTabId = null;
          this.thirdLevelTabArray = [];
        }
      } else {
        this.currentSelSecondTabId = null;
        this.currentSelThirdTabId = null;
        this.thirdLevelTabArray = [];
        this.secondLevelTabArray = [];
      }
    } else if (level === 2) {
      this.currentSelSecondTabId = tabItem.id;
      if (tabItem.children) {
        this.currentSelThirdTabId = tabItem.children[0].id
        this.thirdLevelTabArray = tabItem.children
      } else {
        this.thirdLevelTabArray = [];
        this.currentSelThirdTabId = null;
      }
    } else {
      this.currentSelThirdTabId = tabItem.id;
    }
    const selId = this.findId(tabItem)
    this.selId.emit(selId);
  }

  ngOnInit(): void {
    this.secondLevelTabArray = this.tabObj[0]?.children || [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['tabObj'].firstChange) {
      this.tabObj = changes['tabObj'].currentValue;
      this.chooseTab(this.tabObj[0], 1)
      this.cdr.markForCheck();
    }

  }

}
