import {Component, Input, OnInit} from '@angular/core';
import {ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-typhoon-three',
  templateUrl: './typhoon-three.component.html',
  styleUrls: ['./typhoon-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class TyphoonThreeComponent implements OnInit {
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
