import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-left-hexagon',
  templateUrl: './left-hexagon.component.html',
  styleUrls: ['./left-hexagon.component.less'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class LeftHexagonComponent implements OnInit, AfterViewInit {
  @Input() nameArray: string[]; // 六边形流程的名称集合
  @Input() emergencyRoomNameArray: string[]; // 应急厅的部门名称集合
  @Output() clickReturn: EventEmitter<string>;
  isClickLeft: boolean;
  svgArray = [];

  constructor(public element: ElementRef, private renderer2: Renderer2) {
    this.nameArray = [];
    this.clickReturn = new EventEmitter<string>();
    this.isClickLeft = true;
  }

  trackFunc = (index, item) => {
    return index;
  }

  changeTab(isProcess = true) {
    this.isClickLeft = isProcess;
  }

  // 应急流程下六边形点击
  leftBlockClick() {
    const temp = this.element.nativeElement.querySelectorAll('.column-left .block');
    for (let i = 0; i < temp.length; i++) {
      const odd = i % 2;
      const mouseClick = fromEvent(temp[i], 'click');
      const subscription = mouseClick.subscribe(() => {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < temp.length; j++) {
          this.renderer2.removeClass(temp[j], 'column-div-left-clicked');
          this.renderer2.removeClass(temp[j], 'column-div-right-clicked');
        }
        if (odd === 0) {
          this.renderer2.addClass(temp[i], 'column-div-left-clicked');
        } else {
          this.renderer2.addClass(temp[i], 'column-div-right-clicked');
        }
        const returnStr = temp[i].querySelector('p').innerHTML.replace('<br>', '');
        this.clickReturn.emit(returnStr);
      });
    }
  }

  // 应急厅下每个选项卡点击
  leftDeptClick() {
    const temp = this.element.nativeElement.querySelectorAll('.ul-item');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < temp.length; i++) {
      const mouseClick = fromEvent(temp[i], 'click');
      const subscription = mouseClick.subscribe(() => {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < temp.length; j++) {
          this.renderer2.removeClass(temp[j], 'active');
        }
        this.renderer2.addClass(temp[i], 'active');
      });
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.leftDeptClick();
    this.leftBlockClick();
  }

}
