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
        levelTwo: '1万人以上5万人以下',
        levelThree: '5000人以上1万人以下',
        levelFour: '5000人以下'
      },
      {
        name: '直接经济损失',
        levelOne: '1亿元以上',
        levelTwo: '2000万元以上1亿元以下',
        levelThree: '500万元以上2000万元以下',
        levelFour: '500万元以下'
      },
      {
        name: '/',
        levelOne: '因环境污染造成区域生态功能丧失或该区域国家重点保护物种灭绝的',
        levelTwo: '因环境污染造成区域生态功能部分丧失或该区域国家重点保护野生动植物种群大批死亡的',
        levelThree: '因环境污染造成国家重点保护的动植物物种受到破坏的',
        levelFour: '因环境污染造成跨县级行政区域纠纷，引起一般性群体影响的'
      },
      {
        name: '/',
        levelOne: '因环境污染造成设区的市级以上城市集中式饮用水水源地取水中断的',
        levelTwo: '因环境污染造成县级城市集中式饮用水水源地取水中断的',
        levelThree: '因环境污染造成乡镇集中式饮用水水源地取水中断的',
        levelFour: '对环境造成一定影响，尚未达到较大突发环境事件级别的'
      },
      {
        name: '/',
        levelOne: '/',
        levelTwo: '造成跨省级行政区域影响的突发环境事件',
        levelThree: '造成跨设区的市级行政区域影响的突发环境事件',
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
    this.earthquakeEconomicLevelOptions.length = 3;
  }

}
