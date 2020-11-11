import {Component, Input, OnInit} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';

@Component({
  selector: 'app-forest-fire-three',
  templateUrl: './forest-fire-three.component.html',
  styleUrls: ['./forest-fire-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class ForestFireThreeComponent implements OnInit {

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
