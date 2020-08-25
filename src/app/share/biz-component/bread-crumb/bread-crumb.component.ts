import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.less']
})
export class BreadCrumbComponent implements OnInit {
  @Input() data: string[];

  constructor() {
    this.data = [];
  }

  ngOnInit(): void {
  }

}
