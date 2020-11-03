import {Component, Input, OnInit} from '@angular/core';
import {
  DepartInfoModel,
} from '../../../../../services/biz-services/earthquake-warning-list.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {
  AccidentDisastersListService, EmergencyModel,
  ResponsibilityModel
} from '../../../../../services/biz-services/accident-disasters-list.service';
import {NzMessageService} from 'ng-zorro-antd';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {MapPipe, MapSet} from '../../../../../share/directives/pipe/map.pipe';
import {forkJoin} from 'rxjs';


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
  selector: 'app-earthquake',
  templateUrl: './earthquake.component.html',
  styleUrls: ['./earthquake.component.less']
})
export class EarthquakeComponent implements OnInit {
  isShowStandard: boolean; // 是否展开标准
  @Input() id: number;
  currentPage: number;
  validateForm: FormGroup;
  earthquakeEconomicLevelOptions: OptionsInterface[];
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

  constructor(private fb: FormBuilder, private dataServicers: AccidentDisastersListService,
              public message: NzMessageService) {
    this.isShowStandard = true;
    this.currentPage = 0;
    this.plnId = 0;
    this.responsibilityEntities = [];
    this.cityName = '';
    this.earthquakeEconomicLevelOptions = [];
    this.responsibilityData = [];
    this.emergencyData = [];
    this.rowspanNum = 0;
    this.tableStandard = [
      {
        name: '死亡/失踪人数',
        levelOne: '300人以上',
        levelTwo: '50人以上、300人以下',
        levelThree: '10人以上、50人以下',
        levelFour: '10人以下'
      },
      {
        name: '直接经济损失',
        levelOne: '直接经济损失占我省上半年地区生产总值1%以上',
        levelTwo: '严重经济损失',
        levelThree: '较重经济损失',
        levelFour: '一定经济损失'
      },
      {
        name: '地震级别',
        levelOne: '1、省陆地行政区域发生6.0级以上；2、近海海域50千米或我省陆地边界50千米以内的邻省（市）7.0级以上地震',
        levelTwo: '1、省陆地行政区域发生5.0以上、6.0级以下；2、近海海域50千米或我省陆地边界50千米以内的邻省（市）6.0级以上、7.0级以下地震',
        levelThree: '1、省陆地行政区域发生4.0以上、5.0级以下；2、近海海域50千米或我省陆地边界50千米以内的邻省（市）5.0级以上、6.0级以下地震',
        levelFour: '省陆地行政区域发生4.0级以下有感地震；'
      }
    ];
    this.backImage = {
      backgroundImage: 'url(../../assets/imgs/modal-box.png)',
      height: '491px',
    };
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  initForm() {
    this.validateForm = this.fb.group({
      peopleLossAndDie: [null],
      propertyLossGrade: [null],
      earthquakeLand: [null],
      earthquakeSea: [null],
      cityId: [null],
      areaId: [null],
    });
  }

  async subForm() {
    this.validateForm.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(res => {
      res.accidentId = this.id;
      this.dataServicers.getDecideGrade(res).subscribe(grade => {
        console.log(grade);
        if (grade != null) {
          this.plnId = grade.plnId;
        }
        const getResponsibility$ = this.dataServicers.getResponsibility({id: res.accidentId, planGrade: grade.grade});
        const getEmergency$ = this.dataServicers.getEmergency({accidentId: res.accidentId, planGrade: grade.grade});
        forkJoin(getResponsibility$, getEmergency$).subscribe(result => {
          this.responsibilityData = result[0].selectResponsibility;
          this.emergencyData = result[1];
          this.currentPage = grade.grade;
          if (this.currentPage === 1 || this.currentPage === 2) {
            this.rowspanNum = 25;
          }
        });
      });
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.subForm();
    this.earthquakeEconomicLevelOptions = [...MapPipe.transformMapToArray(MapSet.earthquakeEconomicLevel)];
  }
}
