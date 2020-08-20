import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

export interface DataShowModel {
  duty: string[];
  linkPeople: string;
  linkPhone: string;
}

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DataShowComponent implements OnInit {
  @Input() dataInfo: DataShowModel;

  constructor() {
    this.dataInfo = {
      linkPeople: '',
      linkPhone: '',
      duty: []
    };
  }

  ngOnInit(): void {
  }

}
