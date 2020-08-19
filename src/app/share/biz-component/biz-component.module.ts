import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftHexagonComponent} from "./left-hexagon/left-hexagon.component";


@NgModule({
  declarations: [
    LeftHexagonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeftHexagonComponent
  ]
})
export class BizComponentModule {
}
