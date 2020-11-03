import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {
  CitiesNameModel, CitiesNameService,
  DepartInfoModel,
  PublishAlarmModel
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

export interface SelectedInterface {
  province: string;
  city: string;
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

  constructor(private fb: FormBuilder, private dataService: CitiesNameService, private dataServicers: AccidentDisastersListService,
              public message: NzMessageService, private cdr: ChangeDetectorRef) {
    this.isShowStandard = true;
    this.currentPage = 0;
    this.plnId = 0;
    this.responsibilityEntities = [];
    this.cityName = '';
    this.earthquakeEconomicLevelOptions = [];
    this.responsibilityData = [];
    this.emergencyData = [];
    this.rowspanNum = 0;
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
