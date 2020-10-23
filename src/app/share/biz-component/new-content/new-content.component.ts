import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TeamResponsibilityDTO} from '../../../services/biz-services/accident-disasters-list.service';

export interface TableDataModel {
  responsibility: string;
  department: string;
  responsibilityDetail: string[];
  selectTeamResponsibilityDTO: TeamResponsibilityDTO[];
}

export interface EmergencyDataModel {
  officeName: string;
  officeResponsibility: string[];
  goods: string[];
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
  @Input() EmergencyDataModel: EmergencyDataModel[];

  constructor() {
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isCurrProcess']) {
      if (!changes['isCurrProcess'].firstChange) {
        console.log(changes['isCurrProcess'].currentValue);
      }
    }
  }

}
