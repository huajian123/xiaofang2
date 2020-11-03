import {Component, Input, OnInit} from '@angular/core';

export interface TableDatasModel {
  name: string;
  levelOne: string;
  levelTwo: string;
  levelThree: string;
  levelFour: string;
}

@Component({
  selector: 'app-emergency-standard',
  templateUrl: './emergency-standard.component.html',
  styleUrls: ['./emergency-standard.component.less']
})
export class EmergencyStandardComponent implements OnInit {
  @Input() tableData: TableDatasModel[];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.tableData);
  }

}
