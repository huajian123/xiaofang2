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

@Component({
  selector: 'app-left-hexagon',
  templateUrl: './left-hexagon.component.html',
  styleUrls: ['./left-hexagon.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class LeftHexagonComponent implements OnInit, AfterViewInit {
  @Input() nameArray: string[];
  @Output() clickReturn: EventEmitter<string>;

  constructor(public element: ElementRef, private renderer2: Renderer2) {
    this.nameArray = [];
    this.clickReturn = new EventEmitter<string>();
  }

  trackFunc = (index, item) => {
    return index;
  };


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const temp = this.element.nativeElement.querySelectorAll('.column-left div');
    for (let i = 0; i < temp.length; i++) {
      const odd = i % 2;
      const mouseClick = fromEvent(temp[i], 'click');
      const subscription = mouseClick.subscribe(() => {
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

}
