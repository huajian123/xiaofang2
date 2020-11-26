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
  selector: 'app-railway',
  templateUrl: './railway.component.html',
  styleUrls: ['./railway.component.less']
})
export class RailwayComponent implements OnInit {

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
        name: '/',
        levelOne: '造成30人以上死亡，或者100人以上重伤（包括急性工业中毒，下同），或者1亿元以上直接经济损失的',
        levelTwo: '造成10人以上30人以下死亡，或者50人以上100人以下重伤，或者5000万元以上1亿元以下直接经济损失的',
        levelThree: '造成3人以上10人以下死亡，或者10人以上50人以下重伤，或者1000万元以上5000万元以下直接经济损失的',
        levelFour: '造成3人以下死亡，或者10人以下重伤，或者1000万元以下直接经济损失的，为一般事故'
      },
      {
        name: '/',
        levelOne: '繁忙干线客运列车脱轨18辆以上，并中断铁路行车48小时以上的',
        levelTwo: '客运列车脱轨18辆以上的；货运列车脱轨60辆以上的',
        levelThree: '客运列车脱轨2辆以上18辆以下的；货运列车脱轨6辆以上60辆以下的',
        levelFour: '/'
      },
      {
        name: '/',
        levelOne: '繁忙干线货运列车脱轨60辆以上，并中断铁路行车48小时以上的',
        levelTwo: '客运列车脱轨2辆以上18辆以下，并中断繁忙干线铁路行车24小时以上或者中断其他线路铁路行车48小时以上的；\n' +
          '货运列车脱轨6辆以上60辆以下，并中断繁忙干线铁路行车24小时以上或者中断其他线路铁路行车48小时以上的\n',
        levelThree: '中断繁忙干线铁路行车6小时以上的；中断其他线路铁路行车10小时以上的',
        levelFour: '/'
      },
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
