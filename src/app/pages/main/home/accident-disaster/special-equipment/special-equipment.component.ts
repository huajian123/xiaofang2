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
  selector: 'app-special-equipment',
  templateUrl: './special-equipment.component.html',
  styleUrls: ['./special-equipment.component.less']
})
export class SpecialEquipmentComponent implements OnInit {

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
        levelOne: '特种设备事故造成30人以上死亡，或者100人以上重伤（包括急性工业中毒，下同），或者1亿元以上直接经济损失的',
        levelTwo: '特种设备事故造成10人以上30人以下死亡，或者50人以上100人以下重伤，或者5000万元以上1亿元以下直接经济损失的',
        levelThree: '特种设备事故造成3人以上10人以下死亡，或者10人以上50人以下重伤，或者1000万元以上5000万元以下直接经济损失的',
        levelFour: '特种设备事故造成3人以下死亡，或者10人以下重伤，或者1万元以上1000万元以下直接经济损失的'
      },
      {
        name: '/',
        levelOne: '600兆瓦以上锅炉爆炸的',
        levelTwo: '600兆瓦以上锅炉因安全故障中断运行240小时以上的',
        levelThree: '锅炉、压力容器、压力管道爆炸的',
        levelFour: '压力容器、压力管道有毒介质泄漏，造成500人以上1万人以下转移的'
      },
      {
        name: '/',
        levelOne: '压力容器、压力管道有毒介质泄漏，造成15万人以上转移的',
        levelTwo: '压力容器、压力管道有毒介质泄漏，造成5万人以上15万人以下转移的',
        levelThree: '压力容器、压力管道有毒介质泄漏，造成1万人以上5万人以下转移的',
        levelFour: '电梯轿厢滞留人员2小时以上的'
      },
      {
        name: '/',
        levelOne: '客运索道、大型游乐设施高空滞留100人以上并且时间在48小时以上的',
        levelTwo: '客运索道、大型游乐设施高空滞留100人以上并且时间在24小时以上48小时以下的',
        levelThree: '起重机械整体倾覆的；\n' +
          '客运索道、大型游乐设施高空滞留人员12小时以上的\n',
        levelFour: '起重机械主要受力结构件折断或者起升机构坠落的；\n' +
          '客运索道高空滞留人员3.5小时以上12小时以下的；\n' +
          '大型游乐设施高空滞留人员1小时以上12小时以下的。\n'
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
