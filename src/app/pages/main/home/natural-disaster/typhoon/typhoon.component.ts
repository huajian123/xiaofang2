import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DepartInfoModel} from '../../../../../services/biz-services/earthquake-warning-list.service';
import {
  AccidentDisastersListService,
  EmergencyModel,
  ResponsibilityModel
} from '../../../../../services/biz-services/accident-disasters-list.service';
import {NzMessageService} from 'ng-zorro-antd';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {forkJoin} from 'rxjs';
import {MapPipe, MapSet} from '../../../../../share/directives/pipe/map.pipe';


interface OptionsInterface {
  value: number;
  label: string;
}

export interface TableDatasModel {
  name: string;
  levelOne: string;
  levelTwo: string;
  levelThree: string;
  levelFour: string;
}

@Component({
  selector: 'app-typhoon',
  templateUrl: './typhoon.component.html',
  styleUrls: ['./typhoon.component.less']
})
export class TyphoonComponent implements OnInit {
  isShowStandard: boolean; // 是否展开标准
  @Input() id: number;
  currentPage: number;
  validateForm: FormGroup;
  warningLevelOptions: OptionsInterface[];
  startLevelOptions: OptionsInterface[];
  stormLevelOptions: OptionsInterface[];
  rowspanNum: number;
  responsibilityEntities: DepartInfoModel[];
  cityName: string;
  plnId: number;
  responsibilityData: ResponsibilityModel[];
  emergencyData: EmergencyModel[];
  isVisible = false;
  isOkLoading = false;
  backImage: any;
  tableStandard: TableDatasModel[];
  downLoadUrl: string;
  planId: number;

  constructor(private fb: FormBuilder, private dataServicers: AccidentDisastersListService,
              public message: NzMessageService) {
    this.isShowStandard = true;
    this.currentPage = 0;
    this.plnId = 0;
    this.planId = 0;
    this.responsibilityEntities = [];
    this.cityName = '';
    this.warningLevelOptions = [];
    this.startLevelOptions = [];
    this.stormLevelOptions = [];
    this.responsibilityData = [];
    this.emergencyData = [];
    this.rowspanNum = 0;
    this.downLoadUrl = '';
    this.tableStandard = [
      {
        name: '台风预警信号',
        levelOne: '红色（即预计未来48小时将有台风影响我省，受影响地区影响时平均风力将达11级及以上，并伴有大暴雨以上强降水）',
        levelTwo: '橙色（即预计未来48小时将有台风影响我省，受影响地区影响时平均风力将达10级，并伴有暴雨以上强降水）',
        levelThree: '黄色（即预计未来48小时将有台风影响我省，受影响地区影响时平均风力将达9级，并伴有暴雨天气）',
        levelFour: '蓝色（即预计未来48小时将有台风影响我省，受影响地区影响时平均风力将达8级，并将出现暴雨天气，且有成片大暴雨）'
      },
      {
        name: '台风导致(暴雨预警信号)',
        levelOne: '红色',
        levelTwo: '橙色',
        levelThree: '黄色',
        levelFour: '蓝色'
      },
      {
        name: '风暴潮',
        levelOne: '红色警报（即沿海受台风影响区域有1个或以上有代表性的验潮站的高潮位达到红色警戒潮位）',
        levelTwo: '橙色警报（即沿海受台风影响区域有1个或以上有代表性的验潮站的高潮位达到橙色警戒潮位）',
        levelThree: '黄色警报（即沿海受台风影响区域有1个或以上有代表性的验潮站的高潮位达到黄色警戒潮位）',
        levelFour: '蓝色警报（即沿海受台风影响区域有1个或以上有代表性的验潮站的高潮位达到蓝色警戒潮位）'
      },
      {
        name: '国家启动等级',
        levelOne: 'Ⅰ级',
        levelTwo: 'Ⅱ级',
        levelThree: 'Ⅲ级',
        levelFour: 'Ⅳ级'
      }
    ];
    this.backImage = {
      backgroundImage: 'url(../../assets/imgs/modal-box.png)',
      height: '490px',
      overflowY: 'auto'
    };
  }

  showStandard(): void {
    this.isVisible = true;
  }

  standardOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  standardCancel(): void {
    this.isVisible = false;
  }

  initForm() {
    this.validateForm = this.fb.group({
      typhoonAlarm: [null],
      rainstormAlarm: [null],
      stormTide: [null],
      countryStartGrade: [null],
    });
  }

  async subForm() {
    this.validateForm.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(res => {
      res.accidentId = this.id;
      this.dataServicers.getDecideGrade(res).subscribe(grade => {
        if (grade != null) {
          this.plnId = grade.plnId;
        }
        const getResponsibility$ = this.dataServicers.getResponsibility({id: res.accidentId, planGrade: grade.grade});
        const getEmergency$ = this.dataServicers.getEmergency({accidentId: res.accidentId, planGrade: grade.grade});
        forkJoin(getResponsibility$, getEmergency$).subscribe(result => {
          this.responsibilityData = result[0].selectResponsibility;
          this.planId = result[0].planId;
          this.emergencyData = result[1];
          this.downLoadUrl = result[0].downUrl;
          console.log(this.downLoadUrl);
          this.currentPage = grade.grade;
          if (this.currentPage === 1 || this.currentPage === 2) {
            this.rowspanNum = 17;
          }
        });
      });
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.subForm();
    this.warningLevelOptions = [...MapPipe.transformMapToArray(MapSet.warningLevel)];
    this.startLevelOptions = [...MapPipe.transformMapToArray(MapSet.startLevel)];
    this.stormLevelOptions = [...MapPipe.transformMapToArray(MapSet.stormLevel)];
  }

}
