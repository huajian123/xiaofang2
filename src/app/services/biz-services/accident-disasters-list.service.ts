import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {NzMessageService} from 'ng-zorro-antd';

export enum DisasterEnum {
    AccidentDisaster = 2
}

export interface AccidentDisastersModel {
    id?: number;
    planGrade: number;
    accidentType: number;
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

/*受灾评判等级指标参数*/
export interface ShowDecideGradeModel {
    accidentId: number;
    peopleDie?: number;
    peopleInjury?: number;
    peopleLoss?: number;
    propertyLoss?: number;
    toxicGas?: number;
}

/*地震*/
export interface EarthquakeModel extends ShowDecideGradeModel {
    earthquakeLand?: number;
    earthquakeSea?: number;
}

@Injectable({
    providedIn: 'root'
})
export class AccidentDisastersListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    /*预案详情接口*/
    public getAccidentDisastersList(param: { id: number, planGrade: number }): Observable<AccidentDisastersModel> {
        return this.get('/plan/' + DisasterEnum.AccidentDisaster + '/' + param.id + '/' + param.planGrade, {});
    }

    public getDecideGrade(params: ShowDecideGradeModel): Observable<{ plnId: number, grade: number; }> {
        return this.post('/decide', params);
    }


}
