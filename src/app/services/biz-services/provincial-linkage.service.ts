import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {NzMessageService} from 'ng-zorro-antd';

interface DeptModel {
    id: number;
    deptName: string;
    deptDetail: string;
    upDeptId?: number;
    deptUrl?: string;
}


export interface ProvincialLinkageModel {
    office: DeptModel[];
    bureau: DeptModel[];
}


@Injectable({
    providedIn: 'root'
})
export class ProvincialLinkageService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    public getProvincialLinkage(accidentId, accidentType, planGrade): Observable<ProvincialLinkageModel> {
        return this.get('/subsidiary-dept/' + accidentType + '/' + accidentId + '/' + planGrade, {});
    }
}
