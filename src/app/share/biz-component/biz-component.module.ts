import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftHexagonComponent} from './left-hexagon/left-hexagon.component';
import {BizTabsComponent} from './biz-tabs/biz-tabs.component';
import {DataShowComponent} from './data-show/data-show.component';
import {MyNgZorroModule} from '../my-ng-zorro/my-ng-zorro.module';
import {BreadCrumbComponent} from './bread-crumb/bread-crumb.component';


@NgModule({
  declarations: [
    LeftHexagonComponent,
    BizTabsComponent,
    DataShowComponent,
    BreadCrumbComponent,
  ],
  imports: [
    CommonModule,
    MyNgZorroModule
  ],
  exports: [
    LeftHexagonComponent,
    BizTabsComponent,
    DataShowComponent
  ]
})
export class BizComponentModule {
}
