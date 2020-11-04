import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {
  DepartInfoModel,
} from '../../../../../services/biz-services/earthquake-warning-list.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {
  AccidentDisastersListService, EmergencyModel,
  ResponsibilityModel
} from '../../../../../services/biz-services/accident-disasters-list.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {forkJoin} from 'rxjs';

export interface TableDatasModel {
  name: string;
  levelOne: string;
  levelTwo: string;
  levelThree: string;
  levelFour: string;
}

@Component({
  selector: 'app-hazardous',
  templateUrl: './hazardous.component.html',
  styleUrls: ['./hazardous.component.less']
})
export class HazardousComponent implements OnInit {
  isShowStandard: boolean; // 是否展开标准
  @Input() id: number;
  currentPage: number;
  validateForm: FormGroup;
  responsibilityEntities: DepartInfoModel[];
  cityName: string;
  plnId: number;
  responsibilityData: ResponsibilityModel[];
  emergencyData: EmergencyModel[];
  rowspanNum: number;
  isVisible = false;
  isOkLoading = false;
  backImage: any;
  tableStandard: TableDatasModel[];
  downLoadUrl: string;

  constructor(private fb: FormBuilder, private dataServicers: AccidentDisastersListService,
              public message: NzMessageService, private cdr: ChangeDetectorRef) {
    this.isShowStandard = true;
    this.currentPage = 0;
    this.plnId = 0;
    this.responsibilityEntities = [];
    this.cityName = '';
    this.responsibilityData = [];
    this.emergencyData = [];
    this.rowspanNum = 0;
    this.downLoadUrl = '';
    this.tableStandard = [
      {
        name: '死亡/失踪人数',
        levelOne: '30人（含）以上',
        levelTwo: '10人（含）以上，30人以下',
        levelThree: '3人（含）以上，10人以下',
        levelFour: '3人以下'
      },
      {
        name: '重伤及急性工业中毒人数',
        levelOne: '100人（含）以上',
        levelTwo: '50人（含）以上，100人以下',
        levelThree: '10人（含）以上，50人以下',
        levelFour: '10人以下'
      },
      {
        name: '直接经济损失',
        levelOne: '1亿元（含）以上',
        levelTwo: '5000万元（含）以上，1亿元以下',
        levelThree: '1000万元（含）以上，5000万元以下',
        levelFour: '1000万元以下'
      },
      {
        name: '毒性气体储量',
        levelOne: '10吨及以上',
        levelTwo: '1吨及以上',
        levelThree: '小于1吨',
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
        }
        const getResponsibility$ = this.dataServicers.getResponsibility({id: res.accidentId, planGrade: grade.grade});
        const getEmergency$ = this.dataServicers.getEmergency({accidentId: res.accidentId, planGrade: grade.grade});
        forkJoin(getResponsibility$, getEmergency$).subscribe(result => {
          this.responsibilityData = result[0].selectResponsibility;
          this.emergencyData = result[1];
          this.downLoadUrl = result[0].downUrl;
          this.currentPage = grade.grade;
          if (this.currentPage === 1 || this.currentPage === 2) {
            this.rowspanNum = 19;
          }
        });
      });
    });
  }


  ngOnInit(): void {
    this.initForm();
    this.subForm();
  }

}
