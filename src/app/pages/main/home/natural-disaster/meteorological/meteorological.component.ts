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
  selector: 'app-meteorological',
  templateUrl: './meteorological.component.html',
  styleUrls: ['./meteorological.component.less']
})
export class MeteorologicalComponent implements OnInit {
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
        name: '台风',
        levelOne: '预计未来48小时将有台风影响我省，受影响地区影响时平均风力将达12级及以上，或者阵风达14级以上，并伴有大暴雨以上强降水。',
        levelTwo: '预计未来48小时将有台风影响我省，受影响地区影响时平均风力将达10级，或者阵风12级以上，并伴有暴雨以上强降水。',
        levelThree: '预计未来48小时将有台风影响我省，受影响地区影响时平均风力将达8级，或者阵风10级以上，并伴有暴雨天气。',
        levelFour: '台风影响我省，受影响地区影响时平均风力将达6级，或者阵风8级以上。'
      },
      {
        name: '暴雨',
        levelOne: '过去48小时我省3个及以上设区市大部地区持续出现特大暴雨天气，预计未来24小时上述地区仍将出现大暴雨天气。',
        levelTwo: '过去48小时我省3个及以上设区市大部地区出现大暴雨天气，预计未来24小时上述地区仍将出现暴雨天气。',
        levelThree: '过去24小时我省3个及以上设区市大部地区出现大暴雨天气，预计未来24小时上述地区仍将出现暴雨天气。',
        levelFour: '预计未来24小时我省3个及以上设区市大部地区将出现暴雨天气，且有成片大暴雨。'
      },
      {
        name: '暴雪',
        levelOne: '过去24小时我省3个及以上设区市大部地区出现大暴雪，部分地区特大暴雪天气，预计未来24小时上述地区仍将出现暴雪天气。积雪特别严重，对道路、交通等产生严重影响。',
        levelTwo: '过去24小时我省3个及以上设区市大部地区出现暴雪，部分地区大暴雪天气，预计未来24小时上述地区仍将出现大雪天气；或者预计未来24小时我省3个及以上设区市大部地区将出现大暴雪天气。积雪严重，对道路、交通等产生较大影响。',
        levelThree: '过去24小时我省3个及以上设区市大部地区出现大雪，部分地区暴雪天气，预计未来24小时上述地区仍将出现大雪天气。有较大积雪，对道路、交通产生影响。',
        levelFour: '预计未来24小时我省3个及以上设区市大部地区将出现大雪天气，且有成片暴雪。有积雪，对道路、交通产生影响。'
      },
      {
        name: '干旱',
        levelOne: '我省3个及以上设区市大部地区达到气象干旱重旱等级，且至少2个设区市大部分地区出现气象干旱特旱等级，预计干旱天气或干旱范围进一步发展。',
        levelTwo: '我省3个及以上设区市大部地区达到气象干旱重旱等级，且至少1个设区市的大部分地区出现气象干旱特旱等级，预计干旱天气或干旱范围进一步发展。',
        levelThree: '我省3个及以上设区市大部地区达到气象干旱重旱等级，预计干旱天气或干旱范围进一步发展。',
        levelFour: '/'
      },
      {
        name: '雾霾',
        levelOne: '预计未来24小时我省5个及以上设区市大部地区出现严重霾天气。',
        levelTwo: '预计未来24小时我省5个及以上设区市大部地区出现重度霾天气或特强浓雾天气。',
        levelThree: '预计未来24小时我省5个及以上设区市大部地区将出现强浓雾天气或中度霾天气。',
        levelFour: '预计未来24小时我省5个及以上设区市大部地区将出现浓雾天气。'
      },
      {
        name: '冰冻（道路结冰）',
        levelOne: '/',
        levelTwo: '预计未来48小时我省3个及以上设区市大部地区出现由于降雨（雪）造成的冰冻天气，对道路、交通有严重影响。',
        levelThree: '预计未来48小时我省3个及以上设区市大部地区将出现由于降雨（雪）造成的冰冻天气，对道路、交通有较大影响。',
        levelFour: '预计未来24小时我省3个及以上设区市大部地区将出现霜冻天气。'
      },
      {
        name: '寒潮',
        levelOne: '/',
        levelTwo: '预计未来48小时我省5个及以上设区市大部地区最低气温下降18℃以上，上述地区最低气温降至0℃以下。',
        levelThree: '预计未来48小时我省5个及以上设区市大部地区最低气温下降14℃以上，上述地区最低气温降至0℃以下。',
        levelFour: '预计未来48小时我省5个及以上设区市大部地区最低气温下降12℃以上，上述地区最低气温降至4℃以下。'
      },
      {
        name: '大风',
        levelOne: '/',
        levelTwo: '预计未来48小时我省3个及以上设区市大部地区将出现阵风12级以上大风天气。',
        levelThree: '预计未来48小时我省5个及以上设区市大部地区将出现阵风10级以上大风天气。',
        levelFour: '/'
      },
      {
        name: '高温',
        levelOne: '/',
        levelTwo: '过去48小时我省3个及以上设区市大部地区出现最高气温达39℃及以上，且有成片地区出现40℃及以上高温天气，预计未来48小时上述地区仍将出现39℃及以上高温天气。',
        levelThree: '过去48小时我省5个及以上设区市大部地区最高气温达39℃，预计未来48小时上述地区仍将出现39℃及以上高温天气。',
        levelFour: '过去48小时我省5个及以上设区市大部地区最高气温达39℃，预计未来48小时上述地区仍将出现39℃及以上高温天气。'
      },
      {
        name: '低温',
        levelOne: '/',
        levelTwo: '/',
        levelThree: '过去72小时我省5个及以上设区市大部地区出现平均气温或最低气温较常年同期偏低5℃以上的持续低温天气，预计未来48小时上述地区平均气温或最低气温持续偏低5℃以上（11月至翌年3月）',
        levelFour: '过去48小时我省5个及以上设区市大部地区出现平均气温或最低气温较常年同期偏低5℃以上的持续低温天气，预计未来48小时上述地区平均气温或最低气温持续偏低5℃以上（11月至翌年3月）。'
      },
      {
        name: '其他',
        levelOne: '气象及其衍生灾害已出现，且造成人员特别重大死亡和经济特大损失的；气象预报、预测出现历史罕见的极端天气气候事件，将可能对社会、经济及群众生产、生活等造成特别严重影响。\n' +
          '灾害性天气已对群众生产生活造成特别重大损失和影响，超出我省处置能力，需要由国务院组织处置的，以及上述灾害已经启动Ⅱ级响应但仍可能持续发展或影响周边地区时。',
        levelTwo: '气象及其衍生灾害已出现，且造成人员特大死亡和经济重大损失的；气象预报、预测出现极端天气气候事件，将可能对社会、经济及群众生产、生活等造成严重影响。\n' +
          '灾害性天气已对群众生产生活造成重大损失和影响，以及上述灾害已经启动Ⅲ级响应但仍可能持续发展或影响其他地区时。',
        levelThree: '气象及其衍生灾害已出现，且造成人员重大死亡和经济较大损失的；气象预报、预测出现灾害性天气，将可能对社会、经济及群众生产、生活等造成较重影响。\n' +
          '灾害性天气已对群众生产生活造成较大损失和影响，以及上述灾害已经启动Ⅳ级响应但仍可能持续发展或影响其他地区时。',
        levelFour: '气象及其衍生灾害已出现，且造成人员死亡和经济损失的；气象预报、预测出现的天气将可能对社会、经济及群众生产、生活产生一定影响。\n' +
          '灾害性天气已对群众生产生活造成一定损失和影响。'
      }
    ];
    this.backImage = {
      backgroundImage: 'url(../../assets/imgs/modal-box.png)',
      height: '490px',
      overflowY: 'auto',
      backgroundSize: '100%,100%'
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
