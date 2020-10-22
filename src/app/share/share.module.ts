import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyNgZorroModule} from './my-ng-zorro/my-ng-zorro.module';
import {RouterModule} from '@angular/router';
import {BizComponentModule} from './biz-component/biz-component.module';
import {HtmlPipe} from './directives/pipe/html.pipe';
import {MapPipe} from './directives/pipe/map.pipe';


@NgModule({
  declarations: [HtmlPipe, MapPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyNgZorroModule,
    RouterModule,
    BizComponentModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyNgZorroModule,
    RouterModule,
    BizComponentModule,
  ]
})
export class ShareModule {
}
