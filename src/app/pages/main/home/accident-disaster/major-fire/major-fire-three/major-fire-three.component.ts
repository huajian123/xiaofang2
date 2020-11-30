import {Component, OnInit} from '@angular/core';
import {bounceInOnEnterAnimation, lightSpeedInOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-major-fire-three',
  templateUrl: './major-fire-three.component.html',
  styleUrls: ['./major-fire-three.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
    bounceInOnEnterAnimation(),
  ]
})
export class MajorFireThreeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
