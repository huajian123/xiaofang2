import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG, DOWNLOAD_CONFIT} from '../services.module';
import {PageInfo} from '../../VO/types';
import {NzMessageService} from 'ng-zorro-antd';


export interface PlanListModel {
    id?: number;
    planName: string;
    accidentId: number;
    accidentType: number;
    updateTime: Date;
    updateBy: string;
    createTime: Date;
    createBy: string;
    delFlag?: boolean;
    planUrl?: string;
}

export interface PlanDetailModel {
    id?: number;
    planGrade: number;
    accidentId: number;
    accidentType: number;
    planName: string;
    planDeptResyEntities: PlanDeptResyEntitiesDTOS[];
}

export interface PlanDeptResyEntitiesDTOS {
    id?: number;
    resyId?: number;
    resyName?: string;
    resyDetail: string;
    deptId?: number;
    deptName: string;
    deptPhone: string;
    grade?: number;
}

export interface DeptResyMessageModel {
    selectDepartmentDTOS: DepartmentDTOS[];
    emergencyTeamDTOS: EmergencyTeamDTOS[];
    command?: EmergencyTeamDTOS;
}

export interface DepartmentDTOS {
    id?: number;
    departmentName: string;
    departmentPhone: string;
}

export interface EmergencyTeamDTOS {
    id?: number;
    resyName: string;
    resyDetail: string;
}

export interface AddEditEmergencyTeamModel {
    id?: number;
    accidentId: number;
    planGrade: number;
    accidentName: string;
    accidentType: number;
    addEmergencyTeamDTOS: EmergencyTeamModel[];
    createBy?: string;
    updateBy?: string;
    deptId: number;
    resyId: number;
    planName: string;
}

export interface EmergencyTeamModel {
    deptId: number;
    resyId: number;
}

export interface EmergencyPlanFileList {
    allType: PlanListModel[];
    accidentDisaster: PlanListModel[];
    naturalDisaster: PlanListModel[];
    publicHealth: PlanListModel[];
    societySafety: PlanListModel[];
}

@Injectable({
    providedIn: 'root'
})
export class PlanListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, @Inject(DOWNLOAD_CONFIT) public downLoadUri: string,
                public message: NzMessageService) {
        super(http, uri, message);
    }

    /*获取所有的预案列表*/
    public getPlanList(params): Observable<PageInfo<PlanListModel>> {
        return this.post('/plans', params);
    }

    /*获取预案详情*/
    public getPlanDetail(id: number): Observable<PlanDetailModel> {
        return this.get('/plan/' + id, {});
    }

    /*新增预案*/
    public addPlan(params: AddEditEmergencyTeamModel): Observable<any> {
        return this.post('/plan', params);
    }

    /*编辑预案*/
    public editPlan(params: AddEditEmergencyTeamModel): Observable<any> {
        return this.put('/plan/' + params.id, params);
    }

    /*预案删除*/
    public getPlanListDelete(id: number): Observable<any> {
        return this.delete('/plan/' + id, {});
    }

    /*部门、小队信息接口下拉菜单*/
    public getDeptResyList(): Observable<DeptResyMessageModel> {
        return this.get('/dept-resy-message', {});
    }

    public getPlans(): Observable<EmergencyPlanFileList> {
        return this.get('/plans', {});
    }

    public downLoadPlan(downloadUrl: string, fileName: string) {
        return this.post('/download-plan', {
            downloadUrl: this.downLoadUri + downloadUrl,
            fileName,
        });
    }

}
