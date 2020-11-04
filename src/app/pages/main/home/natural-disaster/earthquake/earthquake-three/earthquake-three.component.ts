import {Component, Input, OnInit} from '@angular/core';
import {CitiesNameService, ResponsibilityEntitiesModel} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';
import {ResponsibilityModel} from '../../../../../../services/biz-services/accident-disasters-list.service';

@Component({
  selector: 'app-earthquake-three',
  templateUrl: './earthquake-three.component.html',
  styleUrls: ['./earthquake-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class EarthquakeThreeComponent implements OnInit {
  @Input() responsibilityData: ResponsibilityModel[];
  @Input() currentPage: number;
  @Input() downLoadUrl: string;
  nameArray: string[];
  tableObj: ResponsibilityModel[];
  level: number;

  constructor() {
    this.nameArray = [];
    this.tableObj = [];
  }


  ngOnInit(): void {
    this.level = this.currentPage;
    this.tableObj = this.responsibilityData;
  }
}
