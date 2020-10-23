import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
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
  @ViewChild('distannce1') distannce1: ElementRef;
  @ViewChild('distannce2') distannce2: ElementRef;
  @ViewChild('distannce3') distannce3: ElementRef;
  @ViewChild('distannce4') distannce4: ElementRef;
  @ViewChild('distannce5') distannce5: ElementRef;
  @ViewChildren('emergencyTable') emergencyTable: QueryList<ElementRef>;


  constructor() {
  }

  goDistance(index): void {
    console.log(index);
    this['distannce' + index]?.nativeElement.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'start'
    });
    this.emergencyTable['_results'][index - 1]?.nativeElement.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'start'
    });
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isCurrProcess']) {
      if (!changes['isCurrProcess'].firstChange) {
        console.log(this.emergencyTable);
        console.log(changes['isCurrProcess'].currentValue);
      }
    }
  }

}
