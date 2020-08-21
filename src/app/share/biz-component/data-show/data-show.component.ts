import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ResponsibilityEntitiesModel} from '../../../services/biz-services/earthquake-warning-list.service';


@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DataShowComponent implements OnInit {
  @Input() dataInfo: ResponsibilityEntitiesModel;

  constructor() {
    this.dataInfo = {
      linkman: '',
      linkPhone: '',
      responsibilityDetailSort: []
    };
  }

  ngOnInit(): void {
  }

}
