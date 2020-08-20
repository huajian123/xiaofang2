import {Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {
  CitiesNameModel, CitiesNameService,
  DepartInfoModel,
  PublishAlarmModel
} from '../../../../../services/biz-services/earthquake-warning-list.service';
import {VariableEnum} from '../../home.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AccidentDisastersListService} from '../../../../../services/biz-services/accident-disasters-list.service';
import {NzMessageService} from 'ng-zorro-antd';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {MapPipe, MapSet} from '../../../../../share/directives/pipe/map.pipe';
import {fromEvent} from 'rxjs';
import {DataShowModel} from "../../../../../share/biz-component/data-show/data-show.component";

interface OptionsInterface {
  value: number;
  label: string;
}

export interface SelectedInterface {
  province: string;
  city: string;
}

@Component({
  selector: 'app-earthquake',
  templateUrl: './earthquake.component.html',
  styleUrls: ['./earthquake.component.less']
})
export class EarthquakeComponent implements OnInit, OnChanges {
  isShowStandard: boolean; // 是否展开标准
  isToggle: boolean;
  isToggles: boolean;
  @Input() id: number;
  @Input() selAlarm: PublishAlarmModel; // 厅长界面直接传入的选中的预案
  currentPage: number;
  numVariable = VariableEnum;
  validateForm: FormGroup;
  provinceData: OptionsInterface[];
  cityData: OptionsInterface[];
  earthquakeEconomicLevelOptions: OptionsInterface[];
  selected: SelectedInterface;
  dataInfo: CitiesNameModel[];
  responsibilityEntities: DepartInfoModel[];
  cityName: string;
  plnId: number;
  tabId: number;
  nameArray = ['启动应急响应', '分组开展<br/>应急救援工作', '保障方案', '现场信息采集', '辅助指挥<br/>决策信息', '事态控制', '善后处理<br/>与事故调查'];
  showInfo: DataShowModel = {
    linkPhone: "1131313131",
    linkPeople: '张三',
    duty: ["先做第一步", '再做第二部']
  }

  constructor(private fb: FormBuilder, private dataService: CitiesNameService, private dataServicers: AccidentDisastersListService,
              public message: NzMessageService, public element: ElementRef, private renderer2: Renderer2) {
    this.tabId = 1;
    this.provinceData = [];
    this.cityData = [];
    this.selected = {
      province: '',
      city: ''
    };
    this.isShowStandard = true;
    this.isToggle = true;
    this.isToggles = true;
    this.currentPage = 0;
    this.plnId = 0;
    this.responsibilityEntities = [];
    this.cityName = '';
    this.earthquakeEconomicLevelOptions = [];
  }

  // 点击左侧六边形获取当前名字
  getCurrentLeftName(event) {
    console.log("当前点击的六边形的名字是：" + event);
  }

  // 获取当前选中的tabid
  getSelId(event) {
    console.log("当前点击的tab的id是：" + event);
  }


  changeProvince(eve) {
    this.cityData = [];
    this.selected.city = '';
    this.dataInfo.find(data => data.id === eve).countDTOS.forEach(item => {
      this.cityData.push({value: item.id, label: item.countName});
    });
  }

  async getEarthquakeWarningList() {
    await this.dataService.getCitiesNameList().subscribe(res => {
      this.dataInfo = res;
      res.forEach(item => {
        this.provinceData.push({value: item.id, label: item.cityName});
      });
    });
  }

  initForm() {
    this.validateForm = this.fb.group({
      peopleDie: [null],
      peopleInjury: [null],
      propertyLoss: [null],
      peopleLoss: [null],
      toxicGas: [null],
      cityId: [null],
      areaId: [null],
    });
  }

  async subForm() {
    this.validateForm.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(res => {
      res.accidentId = this.id;
      this.dataServicers.getDecideGrade(res).subscribe(grade => {
        if (grade != null) {
          this.plnId = grade.plnId;
          this.currentPage = grade.grade;
        }
        const cityName = this.provinceData.find((item) => item.value === res.cityId)?.label || '';
        const areaName = this.cityData.find((item) => item.value === res.areaId)?.label || '';
        this.cityName = `${cityName}${areaName}` || '';
      });
    });
  }

  ngOnInit(): void {
    const temp = this.element.nativeElement.getElementsByClassName('show-box');
    console.log(temp);
    // 管理员登陆
    if (!this.selAlarm) {
      this.initForm();
      this.getEarthquakeWarningList();
      this.subForm();
    } else {
      this.currentPage = this.selAlarm.accidentGrade;
      this.cityName = this.selAlarm.accidentAddress;
    }
    this.earthquakeEconomicLevelOptions = [...MapPipe.transformMapToArray(MapSet.earthquakeEconomicLevel)];

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['selAlarm'].firstChange) {
      this.currentPage = changes['selAlarm'].currentValue.accidentGrade;
    }
  }

}
