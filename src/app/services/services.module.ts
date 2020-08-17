import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {downLoadUrl, environment, localUrl} from '../../environments/environment';

export const API_CONFIG = new InjectionToken('ApiConfigToken');
export const DOWNLOAD_CONFIT = new InjectionToken('DownLoadConfigToken');

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {provide: API_CONFIG, useValue: environment.production ? localUrl : '/site'},
        {provide: DOWNLOAD_CONFIT, useValue: environment.production ? downLoadUrl : downLoadUrl}
    ]
})
export class ServicesModule {
}
