import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ResponsibilityEntitiesModel} from '../../../services/biz-services/earthquake-warning-list.service';
import {EVENT_KEY} from '../../../../environments/staticVariable';
import {UserRole} from '../../../VO/types';


@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DataShowComponent implements OnInit {
  @Input() dataInfo: ResponsibilityEntitiesModel;
  userRole: number;
  userRoleEnum = UserRole;

  constructor() {
    this.dataInfo = {
      linkman: '',
      linkPhone: '',
      responsibilityDetailSort: [],
      beforeResponsibilityNameSort: [],
      responsibilityNameSort: []
    };
  }

  ngOnInit(): void {
    this.userRole = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo)).role;
  }

}
