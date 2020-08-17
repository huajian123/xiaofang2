import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyNgZorroModule} from './my-ng-zorro/my-ng-zorro.module';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyNgZorroModule,
        RouterModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyNgZorroModule,
        RouterModule,
    ]
})
export class ShareModule {
}
