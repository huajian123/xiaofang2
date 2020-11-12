import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input, OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {DOWNLOAD_CONFIT} from '../../../services/services.module';
import {
  AccidentDisastersListService,
  SelectEmergencyOrderModel
} from '../../../services/biz-services/accident-disasters-list.service';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-btn-group',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.less'],
})
export class BtnGroupComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() levels: number;
  @Input() downLoadUrl: string;
  @Input() emergencyRoomNameArray: string[]; // 应急厅的部门名称集合
  @ViewChild('inputName') inputName: ElementRef;
  inputBlock$: Observable<any>;
  inputBlockSub$: Subscription;
  isVisible = false;
  isOkLoading = false;
  selectEmergency: SelectEmergencyOrderModel[];
  backImage: any;
  selectEmergencyDeptNames: string[];
  @ViewChildren('emergencyTable') emergencyTable: QueryList<ElementRef>;


  constructor(@Inject(DOWNLOAD_CONFIT) public downLoadUri: string, private dataServicers: AccidentDisastersListService) {
    this.selectEmergency = [];
    this.backImage = {
      backgroundImage: 'url(../../assets/imgs/modal-big.png)',
      height: '600px',
    };
    this.selectEmergencyDeptNames = [];
  }

  showInstruction() {
    this.isVisible = true;
  }

  showEmergencyRoom() {
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

  obInput() {
    this.inputBlock$ = fromEvent(this.inputName.nativeElement, 'input').pipe(debounceTime(1000), distinctUntilChanged());
    this.inputBlockSub$ = this.inputBlock$.subscribe(res => {
      const name = res.target.value.trim();
      const index = this.checkInput(name);
      this.goDistance(index);
    });
  }

  clearInput(e) {
    this.inputName.nativeElement.value = '';
    this.goDistance(0);
  }

  goDistance(index): void {
    this.emergencyTable['_results'][index]?.nativeElement.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'start'
    });
  }


  checkInput(name: string) {
    for (let i = 0, lenth = this.selectEmergencyDeptNames.length; i < lenth; i++) {
      if (this.selectEmergencyDeptNames[i].indexOf(name) !== -1) {
        return i;
      }
    }
  }

  ngOnDestroy() {
    this.inputBlockSub$.unsubscribe();
    this.inputBlockSub$ = null;
  }

  ngOnInit(): void {
    this.downLoadUrl = this.downLoadUri + this.downLoadUrl;
    this.dataServicers.getEmergencyOrder({planId: this.levels}).subscribe(res => {
      this.selectEmergency = res.selectEmergencyOrder;
      this.selectEmergencyDeptNames.length = 0;
      this.selectEmergency.forEach(({department}) => {
        this.selectEmergencyDeptNames.push(department);
      });
    });
  }

  ngAfterViewInit(): void {
    this.obInput();
  }

}
