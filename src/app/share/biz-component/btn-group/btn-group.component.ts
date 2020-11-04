import {Component, Inject, Input, OnInit} from '@angular/core';
import {DOWNLOAD_CONFIT} from '../../../services/services.module';
import {AccidentDisastersListService, SelectEmergencyOrderModel} from '../../../services/biz-services/accident-disasters-list.service';

@Component({
  selector: 'app-btn-group',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.less'],
})
export class BtnGroupComponent implements OnInit {
  @Input() levels: number;
  @Input() downLoadUrl: string;
  isVisible = false;
  isOkLoading = false;
  selectEmergency: SelectEmergencyOrderModel[];
  backImage: any;

  constructor(@Inject(DOWNLOAD_CONFIT) public downLoadUri: string, private dataServicers: AccidentDisastersListService) {
    this.selectEmergency = [];
    this.backImage = {
      backgroundImage: 'url(../../assets/imgs/modal-big.png)',
      height: '600px',
    };
  }

  showInstruction() {
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

  ngOnInit(): void {
    this.downLoadUrl = this.downLoadUri + this.downLoadUrl;
    console.log(this.downLoadUri);
    console.log(this.levels);
    this.dataServicers.getEmergencyOrder({planId: this.levels}).subscribe(res => {
      console.log(res.selectEmergencyOrder);
      this.selectEmergency = res.selectEmergencyOrder;
    });
  }

}
