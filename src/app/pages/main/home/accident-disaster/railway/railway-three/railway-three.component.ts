import { Component, OnInit } from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-railway-three',
  templateUrl: './railway-three.component.html',
  styleUrls: ['./railway-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class RailwayThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
