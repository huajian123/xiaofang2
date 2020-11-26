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
  selector: 'app-disaster-relief',
  templateUrl: './disaster-relief.component.html',
  styleUrls: ['./disaster-relief.component.less']
})
export class DisasterReliefComponent implements OnInit {
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
    this.earthquakeEconomicLevelOptions = [];
    this.responsibilityData = [];
    this.emergencyData = [];
    this.rowspanNum = 0;
    this.downLoadUrl = '';
    this.tableStandard = [
      {
        name: '死亡/失踪人数',
        levelOne: '50人以上',
        levelTwo: '30人以上、50人以下',
        levelThree: '20人以上、30人以下',
        levelFour: '5人以上、20人以下'
      },
      {
        name: '紧急转移安置或需紧急生活救助',
        levelOne: '20万人以上',
        levelTwo: '10万人以上、20万人以下',
        levelThree: '5万人以上、10万人以下',
        levelFour: '1万人以上、5万人以下'
      },
      {
        name: '倒塌和严重损坏房屋',
        levelOne: '1万间以上，或3000户以上',
        levelTwo: '5000间以上、1万间以下或2000户以上、3000户以下',
        levelThree: '3000间以上、5000间以下或1000户以上、2000户以下',
        levelFour: '1000间以上、3000间以下或300户以上、1000户以下'
      },
      {
        name: '干旱灾害造成缺粮或缺水等生活困难，需政府救助人数',
        levelOne: '100万人以上',
        levelTwo: '60万人以上、100万人以下',
        levelThree: '30万人以上、60万人以下',
        levelFour: '10万人以上、30万人以下'
      }
    ];
    this.backImage = {
      backgroundImage: 'url(../../assets/imgs/modal-box.png)',
      height: '490px',
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
      level: [null],
    });
  }

  async subForm() {
    this.validateForm.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(res => {
      res.accidentId = this.id;
      const getResponsibility$ = this.dataServicers.getResponsibility({id: res.accidentId, planGrade: res.level});
      const getEmergency$ = this.dataServicers.getEmergency({accidentId: res.accidentId, planGrade: res.level});
      forkJoin(getResponsibility$, getEmergency$).subscribe(result => {
        this.responsibilityData = result[0].selectResponsibility;
        this.planId = result[0].planId;
        this.emergencyData = result[1];
        this.downLoadUrl = result[0].downUrl;
        this.currentPage = res.level;
        this.rowspanNum = 3;
      });
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.subForm();
    this.earthquakeEconomicLevelOptions = [...MapPipe.transformMapToArray(MapSet.startLevel)];
  }

}
