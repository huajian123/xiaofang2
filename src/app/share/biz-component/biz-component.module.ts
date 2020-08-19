import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftHexagonComponent} from "./left-hexagon/left-hexagon.component";
import { BizTabsComponent } from './biz-tabs/biz-tabs.component';
import { DataShowComponent } from './data-show/data-show.component';


@NgModule({
  declarations: [
    LeftHexagonComponent,
    BizTabsComponent,
    DataShowComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeftHexagonComponent,
    BizTabsComponent,
    DataShowComponent
  ]
})
export class BizComponentModule {
}
