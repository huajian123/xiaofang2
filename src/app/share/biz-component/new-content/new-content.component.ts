import {Component, Input, OnInit} from '@angular/core';

export interface TableDataModel {
  department: string;
  responsibilityDetail: string[];
}

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.less']
})
export class NewContentComponent implements OnInit {
  @Input() TableDataModel: TableDataModel[];

  /* @Input() paramsTemplete: string;*/
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.TableDataModel);
  }

}
