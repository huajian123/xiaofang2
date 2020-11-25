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
  selector: 'app-environmental-emergency',
  templateUrl: './environmental-emergency.component.html',
  styleUrls: ['./environmental-emergency.component.less']
})
export class EnvironmentalEmergencyComponent implements OnInit {

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
        name: '死亡或中毒或重伤人数',
        levelOne: '3人以上10人以下死亡，或10人以上50人以下中毒或重伤的',
        levelTwo: '10人以上30人以下死亡或50人以上100人以下中毒或重伤',
        levelThree: '3人以上10人以下死亡，或10人以上50人以下中毒或重伤',
        levelFour: '3人以下死亡，或10人以下中毒或重伤'
      },
      {
        name: '疏散、转移人员人数',
        levelOne: '5万人以上',
        levelTwo: '监测到设区市 SO 2 小时浓度达到 650 微克/立方米以上',
        levelThree: '监测到设区市 SO 2 小时浓度达到 500 微克/立方米以上',
        levelFour: '/'
      },
      {
        name: '/',
        levelOne: '监测到设区市 SO 2 小时浓度达到 800 微克/立方米以上',
        levelTwo: '/',
        levelThree: '/',
        levelFour: '/'
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
    this.earthquakeEconomicLevelOptions.length = 3;
  }

}
