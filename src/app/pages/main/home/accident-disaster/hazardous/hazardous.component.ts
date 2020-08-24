import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {
  CitiesNameModel, CitiesNameService,
  DepartInfoModel,
  PublishAlarmModel
} from '../../../../../services/biz-services/earthquake-warning-list.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {AccidentDisastersListService} from '../../../../../services/biz-services/accident-disasters-list.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

interface OptionsInterface {
  value: number;
  label: string;
}

export interface SelectedInterface {
  province: string;
  city: string;
}


@Component({
  selector: 'app-hazardous',
  templateUrl: './hazardous.component.html',
  styleUrls: ['./hazardous.component.less']
})
export class HazardousComponent implements OnInit, OnChanges {
  isShowStandard: boolean; // 是否展开标准
  @Input() id: number;
  @Input() selAlarm: PublishAlarmModel; // 厅长界面直接传入的选中的预案
  currentPage: number;
  validateForm: FormGroup;
  provinceData: OptionsInterface[];
  cityData: OptionsInterface[];
  selected: SelectedInterface;
  dataInfo: CitiesNameModel[];
  responsibilityEntities: DepartInfoModel[];
  cityName: string;
  plnId: number;

  constructor(private fb: FormBuilder, private dataService: CitiesNameService, private dataServicers: AccidentDisastersListService,
              public message: NzMessageService, private cdr: ChangeDetectorRef) {
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

  sendMsg() {
    this.dataService.getPublish({id: this.plnId, cityName: this.cityName}).subscribe(re => {
      this.message.success('发布成功');
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['selAlarm'].firstChange) {
      this.currentPage = this.selAlarm.accidentGrade;
      this.cdr.markForCheck();
    }
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
  }

}
