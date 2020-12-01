import {Component, OnInit} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-meteorological-three',
  templateUrl: './meteorological-three.component.html',
  styleUrls: ['./meteorological-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class MeteorologicalThreeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
