import {Component, Input, OnInit} from '@angular/core';
import {ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-forest-fire-four',
  templateUrl: './forest-fire-four.component.html',
  styleUrls: ['./forest-fire-four.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class ForestFireFourComponent implements OnInit {

  @Input() responsibilityData: ResponsibilityModel[];
  @Input() currentPage: number;
  @Input() downLoadUrl: string;
  @Input() planId: number;
  nameArray: string[];
  tableObj: ResponsibilityModel[];
  level: number;
  levels: number;

  constructor() {
    this.nameArray = [];
    this.tableObj = [];
  }


  ngOnInit(): void {
    this.level = this.currentPage;
    this.levels = this.planId;
    this.tableObj = this.responsibilityData;
  }
}
