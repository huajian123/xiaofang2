import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DepartInfoModel} from '../../../../../services/biz-services/earthquake-warning-list.service';
import {
  AccidentDisastersListService,
  EmergencyModel,
  ResponsibilityModel
} from '../../../../../services/biz-services/accident-disasters-list.service';
import {NzMessageService} from 'ng-zorro-antd';
import {debounceTime, distinctUntilChanged, find, first, switchMap, take} from 'rxjs/operators';
import {forkJoin, Observable, Subscription} from 'rxjs';
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
  selector: 'app-flood-drought',
  templateUrl: './flood-drought.component.html',
  styleUrls: ['./flood-drought.component.less']
})
export class FloodDroughtComponent implements OnInit {
  isShowStandard: boolean; // 是否展开标准
  @Input() id: number;
  currentPage: number;
  validateForm: FormGroup;
  warningLevelOptions: OptionsInterface[];
  dangerLevelOptions: OptionsInterface[];
  rowspanNum: number;
  responsibilityEntities: DepartInfoModel[];
  cityName: string;
  plnId: number;
  responsibilityData: ResponsibilityModel[];
  emergencyData: EmergencyModel[];
  isVisible = false;
  isOkLoading = false;
  backImage: any;
  tableStandardFlood: TableDatasModel[];
  tableStandardDrought: TableDatasModel[];
  downLoadUrl: string;
  planId: number;
  floodAndDrought: string | number;
  formChange$: Observable<any>;
  formChangeSub$: Subscription;

  /* radioValue = '0';*/

  constructor(private fb: FormBuilder, private dataServicers: AccidentDisastersListService,
              public message: NzMessageService) {
    this.floodAndDrought = '0';
    this.isShowStandard = true;
    this.currentPage = 0;
    this.plnId = 0;
    this.planId = 0;
    this.responsibilityEntities = [];
    this.cityName = '';
    this.warningLevelOptions = [];
    this.dangerLevelOptions = [];
    this.responsibilityData = [];
    this.emergencyData = [];
    this.rowspanNum = 0;
    this.downLoadUrl = '';
    this.tableStandardFlood = [
      {
        name: '省水利厅发布洪水预警',
        levelOne: '红色',
        levelTwo: '橙色',
        levelThree: '黄色',
        levelFour: '蓝色'
      },
      {
        name: '省气象局发布暴雨预警',
        levelOne: '红色',
        levelTwo: '橙色',
        levelThree: '黄色',
        levelFour: '蓝色'
      },
      {
        name: '长江（含太湖）流域受淹（涝）面积或淮河（含沂沭泗）流域受淹（涝）面积',
        levelOne: '超过1300万亩或超过2800万亩',
        levelTwo: '900万亩或超过1900万亩',
        levelThree: '700万亩或超过1400万亩',
        levelFour: '超过550万亩或超过950万亩'
      },
      {
        name: '流域性防洪工程、区域性骨干防洪工程、水库大坝出现险情',
        levelOne: '特别重大险情，大江大河堤防发生决口，河道发生决口，出现垮坝，严重威胁人民生命财产安全',
        levelTwo: '重大险情或小型水库出现垮坝，威胁人民生命财产安全',
        levelThree: '较大险情',
        levelFour: '一般险情'
      }
    ];
    this.tableStandardDrought = [
      {
        name: '省水利厅发布水情干旱预警',
        levelOne: '红色',
        levelTwo: '橙色',
        levelThree: '黄色',
        levelFour: '蓝色'
      },
      {
        name: '省气象局发布干旱预警',
        levelOne: '红色',
        levelTwo: '橙色',
        levelThree: '黄色',
        levelFour: '蓝色'
      },
      {
        name: '长江（含太湖）流域受旱面积或淮河（含沂沭泗）流域受旱面积',
        levelOne: '超过1000万亩或超过2800万亩',
        levelTwo: '超过700万亩或超过1900万亩',
        levelThree: '超过550万亩或超过1400万亩',
        levelFour: '超过350万亩或超过950万亩'
      },
      {
        name: '因旱情影响集中饮用水水源地取水',
        levelOne: '严重影响多个设区市',
        levelTwo: '影响多个设区市',
        levelThree: '影响某个设区市',
        levelFour: '影响多个县级城市'
      }
    ];
    this.backImage = {
      backgroundImage: 'url(../../assets/imgs/modal-box.png)',
      backgroundSize: '100%,100%',
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
      flood: [null],
      rainstormFlood: [null],
      damFlood: [null],
      huaiheFlood: [null],
      changjiangFlood: [null],
      waterDrought: [null],
      weatherDrought: [null],
      changjiangDrought: [null],
      huaiheDrought: [null],
      area: [null],
    });
  }

  changeRadio() {
    this.formChangeSub$.unsubscribe();
    this.validateForm.reset();
    this.subForm();
    this.currentPage = 0;
  }

  async subForm() {
    this.formChange$ = this.validateForm.valueChanges.pipe(debounceTime(1000), distinctUntilChanged());
    this.formChangeSub$ = this.formChange$.subscribe(res => {
      res.accidentId = this.id;
      res.floodAndDrought = this.floodAndDrought;
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
          this.currentPage = grade.grade;
        });
      });
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.subForm();
    this.warningLevelOptions = [...MapPipe.transformMapToArray(MapSet.warningLevel)];
    this.dangerLevelOptions = [...MapPipe.transformMapToArray(MapSet.dangerLevel)];
  }
}
