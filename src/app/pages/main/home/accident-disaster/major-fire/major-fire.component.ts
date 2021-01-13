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
  selector: 'app-major-fire',
  templateUrl: './major-fire.component.html',
  styleUrls: ['./major-fire.component.less']
})
export class MajorFireComponent implements OnInit {
  isShowStandard: boolean; // 是否展开标准
  @Input() id: number;
  currentPage: number;
  validateForm: FormGroup;
  rowspanNum: number;
  responsibilityEntities: DepartInfoModel[];
  plnId: number;
  secLevelOptions: OptionsInterface[];
  responsibilityData: ResponsibilityModel[];
  emergencyData: EmergencyModel[];
  isVisible = false;
  isOkLoading = false;
  backImage: any;
  tableStandard: TableDatasModel[];
  downLoadUrl: string;
  planId: number;
  level: number;

  constructor(private fb: FormBuilder, private dataServicers: AccidentDisastersListService,
              public message: NzMessageService) {
    this.isShowStandard = true;
    this.currentPage = 0;
    this.plnId = 0;
    this.planId = 0;
    this.level = 2;
    this.secLevelOptions = [];
    this.responsibilityEntities = [];
    this.responsibilityData = [];
    this.emergencyData = [];
    this.rowspanNum = 0;
    this.downLoadUrl = '';
    this.tableStandard = [
      {
        name: '死亡/失踪人数',
        levelOne: '30人(含)以上',
        levelTwo: '10人(含)以上，30人以下',
        levelThree: '3人(含)以上，10人以下',
        levelFour: '1人(含)以上，3人以下'
      },
      {
        name: '重伤人数',
        levelOne: '100人(含)以上',
        levelTwo: '50人(含)以上，100人以下',
        levelThree: '10人(含)以上，50人以下',
        levelFour: '1人(含)以上，10人以下'
      },
      {
        name: '直接财产损失',
        levelOne: '1亿元(含)以上',
        levelTwo: '5000万元(含)以上，1亿元以下',
        levelThree: '1000万元(含)以上，5000万元以下',
        levelFour: '1000万元以下'
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
      peopleLossAndDie: [null],
      peopleInjury: [null],
      propertyLoss: [null],
    });
  }

  getLevelBySel(grade) {
    if (grade != null) {
      this.plnId = grade.plnId;
    }
    const getResponsibility$ = this.dataServicers.getResponsibility({id: this.id, planGrade: grade});
    const getEmergency$ = this.dataServicers.getEmergency({accidentId: this.id, planGrade: grade});
    forkJoin(getResponsibility$, getEmergency$).subscribe(result => {
      this.responsibilityData = result[0].selectResponsibility;
      this.planId = result[0].planId;
      this.emergencyData = result[1];
      this.downLoadUrl = result[0].downUrl;
      this.currentPage = grade;
    });
  }

  async subForm() {
    this.validateForm.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(res => {
      res.accidentId = this.id;
      this.dataServicers.getDecideGrade(res).subscribe(grade => {
        this.getLevelBySel(grade.grade);
        this.level = grade.grade;
      });
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.subForm();
    this.getLevelBySel(this.level);
    this.secLevelOptions = [...MapPipe.transformMapToArray(MapSet.startLevel)];
  }
}
