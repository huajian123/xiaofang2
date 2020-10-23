import {Component, Input, OnInit} from '@angular/core';
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
export class NewContentComponent implements OnInit {
  @Input() TableDataModel: TableDataModel[];

  /* @Input() paramsTemplete: string;*/
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.TableDataModel[2].selectTeamResponsibilityDTO[0].teamName);
  }

}
