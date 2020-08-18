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
  tabs = [
    {
      id: 1,
      name: '应急管理厅'
    },
    {
      id: 2,
      name: '专业处置组'
    },
    {
      id: 3,
      name: '警戒疏散组'
    },
    {
      id: 4,
      name: '交通管制组'
    }
  ];

  chooseTab(type) {
    this.tabId = type;
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
    this.currentPage = 0;
    this.plnId = 0;
    this.responsibilityEntities = [];
    this.cityName = '';
    this.earthquakeEconomicLevelOptions = [];
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
    const temp = this.element.nativeElement.querySelectorAll('.column-left div');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < temp.length; i++) {
      const odd = i % 2;
      const mouseClick = fromEvent(temp[i], 'click');
      const subscription = mouseClick.subscribe(() => {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < temp.length; j++) {
          this.renderer2.removeClass(temp[j], 'column-div-left-clicked');
          this.renderer2.removeClass(temp[j], 'column-div-right-clicked');
        }
        if (odd === 0) {
          this.renderer2.addClass(temp[i], 'column-div-left-clicked');
        } else {
          this.renderer2.addClass(temp[i], 'column-div-right-clicked');
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['selAlarm'].firstChange) {
      this.currentPage = changes['selAlarm'].currentValue.accidentGrade;
    }
  }

}
