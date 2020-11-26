import {Component, Input, OnInit} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';

@Component({
  selector: 'app-geological-three',
  templateUrl: './geological-three.component.html',
  styleUrls: ['./geological-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class GeologicalThreeComponent implements OnInit {
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
