import { Component, OnInit } from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-special-equipment-three',
  templateUrl: './special-equipment-three.component.html',
  styleUrls: ['./special-equipment-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class SpecialEquipmentThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
