import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TeamResponsibilityDTO} from '../../../services/biz-services/accident-disasters-list.service';

export interface TableDataModel {
  responsibility: string;
  department: string;
  responsibilityDetail: string[];
  selectTeamResponsibilityDTO: TeamResponsibilityDTO[];
}

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.less']
})
export class NewContentComponent implements OnInit, OnChanges {
  @Input() level: number;
  @Input() TableDataModel: TableDataModel[];
  @Input() isCurrProcess: boolean;
  boole: boolean;

  /* @Input() paramsTemplete: string;*/
  constructor() {
    this.boole = true;

  }


  ngOnInit(): void {
    console.log(this.isCurrProcess);
    console.log(this.TableDataModel[2].selectTeamResponsibilityDTO[0].teamName);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isCurrProcess']) {
      if (!changes['isCurrProcess'].firstChange) {
        console.log(changes['isCurrProcess'].currentValue);
      }
    }
  }

}
