import {Component, OnInit} from '@angular/core';
import {CitiesNameService, PublishAlarmModel} from '../../../services/biz-services/earthquake-warning-list.service';
import {UserRole} from '../../../VO/types';
import {MapPipe, MapSet} from '../../../share/directives/pipe/map.pipe';
import {EVENT_KEY} from '../../../../environments/staticVariable';
import {lightSpeedInOnEnterAnimation} from 'angular-animations';


export enum VariableEnum {
  zero = 0,
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  twenty = 20
}

interface OptionsInterface {
  value: number;
  label: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    lightSpeedInOnEnterAnimation(),
  ]
})
export class HomeComponent implements OnInit {
  showHomePiece: boolean;
  selAlarm: PublishAlarmModel;
  userRole: number;
  userRoleEnum = UserRole;
  currentPage: number;
  accidentType: number;
  accidentId: number;
  numVariable = VariableEnum;
  /*中间数组变量*/
  temporaryNameOptions: OptionsInterface[];
  /*灾害类型下拉*/
  accidentTypeOptions: OptionsInterface[];
  /*自然灾害名称下拉*/
  naturalNameOptions: OptionsInterface[];
  /*事故灾害名称下拉*/
  accidentNameOptions: OptionsInterface[];
  /*公共卫生下拉*/
  publicHealthNameOptions: OptionsInterface[];
  /*社会安全下拉*/
  socialSecurityNameOptions: OptionsInterface[];


  constructor(private dataService: CitiesNameService) {
    this.showHomePiece = true;
  }


  changeAccidentIdValue(index) {
    this.temporaryNameOptions = [];
    if (index !== null) {
      switch (index) {
        case 1:
          this.temporaryNameOptions = this.naturalNameOptions;
          break;
        case 2:
          this.temporaryNameOptions = this.accidentNameOptions;
          break;
        case 3:
          this.temporaryNameOptions = this.publicHealthNameOptions;
          break;
        default:
          this.temporaryNameOptions = this.socialSecurityNameOptions;
          break;
      }
      this.accidentId = null;
    }
  }

  goRest() {
    this.accidentType = null;
    this.accidentId = null;
    this.currentPage = 0;
  }

  goSure() {
    if (this.accidentId === null || this.accidentType === null) {
      return;
    }
    this.currentPage = this.accidentId;
  }

  getPublishAlarm() {
    this.dataService.getPublishAlarm().subscribe(res => {
      if (res[0].accidentPublish) {
        this.selAlarm = res[0];
        this.currentPage = res[0].accidentId;
        this.accidentId = this.currentPage;
      }
    });
  }

  ngOnInit(): void {
    this.accidentTypeOptions = [...MapPipe.transformMapToArray(MapSet.accidentType)];
    this.naturalNameOptions = [...MapPipe.transformMapToArray(MapSet.naturalDisastersType)];
    this.accidentNameOptions = [...MapPipe.transformMapToArray(MapSet.accidentDisastersType)];
    this.publicHealthNameOptions = [...MapPipe.transformMapToArray(MapSet.publicHealthType)];
    this.socialSecurityNameOptions = [...MapPipe.transformMapToArray(MapSet.socialSecurityType)];
    this.userRole = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo)).role;
    if (this.userRole === this.userRoleEnum.User) {
      this.getPublishAlarm();
    }
  }

}
