import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyNgZorroModule} from '../share/my-ng-zorro/my-ng-zorro.module';
import {LoginModule} from "./login/login.module";



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MyNgZorroModule,
    ],
    exports: [
    ]
})
export class PagesModule {
}
