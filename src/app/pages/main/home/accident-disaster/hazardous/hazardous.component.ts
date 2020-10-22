import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {
  DepartInfoModel,
} from '../../../../../services/biz-services/earthquake-warning-list.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {AccidentDisastersListService, ResponsibilityModel} from '../../../../../services/biz-services/accident-disasters-list.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';


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

  constructor(private fb: FormBuilder, private dataServicers: AccidentDisastersListService,
              public message: NzMessageService, private cdr: ChangeDetectorRef) {
    this.isShowStandard = true;
    this.currentPage = 0;
    this.plnId = 0;
    this.responsibilityEntities = [];
    this.cityName = '';
    this.responsibilityData = [];
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
        this.dataServicers.getResponsibility({id: res.accidentId, planGrade: grade.grade}).subscribe(data => {
          this.responsibilityData = data;
          this.currentPage = grade.grade;
        });
      });
    });
  }


  ngOnInit(): void {
    this.initForm();
    this.subForm();
  }

}
