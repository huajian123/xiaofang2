import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {NzMessageService} from 'ng-zorro-antd';

export enum DisasterEnum {
    TotalPlan = 0
}

export interface TotalPlanModel {
    id?: number;
    accidentType: number;
    planGrade: number;
    planName: string;
    planDeptResyEntities: CommanderInfoModel[];
}

export interface CommanderInfoModel {
    id?: number;
    resyId?: number;
    deptId?: number;
    deptName: string;
    deptPhone: string;
    resyName: string;
    resyDetail: string;
    grade?: number;
}


@Injectable({
    providedIn: 'root'
})
export class TotalPlanListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    /*总预案详情接口*/
    public getTotalPlanModelList(param: { id: number, planGrade: number }): Observable<TotalPlanModel> {
        return this.get('/plan/' + DisasterEnum.TotalPlan + '/' + param.id + '/' + param.planGrade, {});
    }


}
