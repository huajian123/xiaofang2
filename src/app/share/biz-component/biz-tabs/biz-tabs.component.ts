import {
  ChangeDetectorRef,
  Component,
  EventEmitter, Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {DOCUMENT} from '@angular/common';

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
export class BizTabsComponent implements OnInit, OnChanges {
  @Input() tabObj: TabObjModel[];
  @Input() currentSelFirstTabId: number;
  @Input() currentSelSecondTabId: number;
  @Input() currentSelThirdTabId: number;
  secondLevelTabArray = [];
  thirdLevelTabArray = [];
  @Output() selId: EventEmitter<number>;
  tempTabObj: TabObjModel[];
  // 关键代码
  showPanel: boolean;
  selfClick: boolean; // 是否点击的是当前配合部门面板本身
  winClick: Subscription; // 绑定window的click事件
  isToggle: boolean;

  constructor(private cdr: ChangeDetectorRef, @Inject(DOCUMENT) private doc: Document) {
    this.selId = new EventEmitter<number>();
    this.showPanel = false;
    this.selfClick = false;
    this.isToggle = true;
    this.tempTabObj = [];
  }


  findId(tabObj) {
    if (tabObj.children) {
      return this.findId(tabObj.children[0]);
    } else {
      return tabObj.id;
    }
  }

  chooseTab(tabItem: TabObjModel, level, e?: Event) {
    if (level === 1) {
      this.currentSelFirstTabId = tabItem.id;
      if (tabItem.children) {
        this.currentSelSecondTabId = tabItem.children[0].id;
        // 存放2级tab数组
        this.secondLevelTabArray = tabItem.children;
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
        // 关键代码
        this.showPanel = true;
        this.currentSelThirdTabId = this.currentSelThirdTabId || tabItem.children[0].id;
        this.thirdLevelTabArray = tabItem.children;
      } else {
        // 关键代码
        this.showPanel = false;
        this.thirdLevelTabArray = [];
        this.currentSelThirdTabId = null;
      }
    } else {
      this.currentSelThirdTabId = tabItem.id;
    }

    // 关键代码
    // 点击文档别的地方的关闭3级tab
    if (level === 2) {
      if (this.showPanel) {
        this.bindDocumentClickListener();
      } else {
        this.unbindDocumentClickListener();
      }
      e.stopPropagation();
      e.preventDefault();
    }

    // 如果点击的是第三级的tab ，保留当前选择的第三级tab的状态
    if (this.currentSelThirdTabId) {
      this.selId.emit(this.currentSelThirdTabId);
      return;
    }
    const selId = this.findId(tabItem);
    this.selId.emit(selId);
  }


  changeHight() {
    this.isToggle = !this.isToggle;
  }

  // 关键代码
  unbindDocumentClickListener() {
    if (this.winClick) {
      this.winClick.unsubscribe();
      this.winClick = null;
    }
  }

  // 关键代码
  bindDocumentClickListener() {
    if (!this.winClick) {
      this.winClick = fromEvent(this.doc, 'click').subscribe(() => {
        if (!this.selfClick) { // 点击了面板以外的部分
          this.showPanel = false;
          this.unbindDocumentClickListener();
        }
        this.selfClick = false;
      });
    }
  }

  ngOnInit(): void {
    this.secondLevelTabArray = this.tabObj[0]?.children || [];
    this.tempTabObj = [...this.tabObj];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['tabObj'].firstChange) {
      this.tabObj = changes['tabObj'].currentValue;
      this.chooseTab(this.tabObj[0], 1);
      this.cdr.markForCheck();
    }
  }
}
