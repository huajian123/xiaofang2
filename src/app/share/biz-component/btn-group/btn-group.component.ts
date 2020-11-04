import {Component, Inject, Input, OnInit} from '@angular/core';
import {DOWNLOAD_CONFIT} from "../../../services/services.module";

@Component({
  selector: 'app-btn-group',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.less'],
})
export class BtnGroupComponent implements OnInit {

  @Input() downLoadUrl: string;

  constructor(@Inject(DOWNLOAD_CONFIT) public downLoadUri: string) {
  }

  ngOnInit(): void {
    this.downLoadUrl = this.downLoadUri + this.downLoadUrl;
    console.log(this.downLoadUri);
    console.log(this.downLoadUrl);
  }

}
