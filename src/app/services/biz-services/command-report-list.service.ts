import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {PageInfo} from '../../VO/types';
import {NzMessageService} from 'ng-zorro-antd';

export interface CommandReportListModel {
    id?: number;
    accidentGrade: number;
    accidentId: number;
    accidentType: number;
    sendDepartment: number;
    acceptDepartment: number;
    sendDepartmentName: string;
    acceptDepartmentName: string;
    temporary?: string;
}

export interface AddUpDownDepartmentModel {
    accidentId: number;
    accidentGrade: number;
    accidentType: number;
    acceptDepartment: number;
    sendDepartmentName: string;
    sendDepartment: number;
    acceptDepartmentName: string;
    createBy: string;
}

export interface DepartmentNameModel {
    selectDepartmentDTOS: SelectDepartmentDTOS[];
    emergencyTeamDTOS: EmergencyTeamDTOS[];
}

export interface SelectDepartmentDTOS {
    id: number;
    departmentName: string;
    departmentPhone?: string;
}

export interface EmergencyTeamDTOS {
    id: number;
    resyName: string;
    resyDetail: string;
}

@Injectable({
    providedIn: 'root'
})
export class CommandReportListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    /*查询部门关系列表*/
    public getCommandReportList(params): Observable<PageInfo<CommandReportListModel>> {
        return this.get('/departments', params);
    }

    /*新增部门关系*/
    public addCommandReport(params: AddUpDownDepartmentModel): Observable<AddUpDownDepartmentModel> {
        return this.post('/department', params);
    }

    /*编辑部门关系*/
    public editCommandReport(params: CommandReportListModel): Observable<CommandReportListModel> {
        return this.put('/department', params);
    }

    /*部门关系详情*/
    public getCommandReportDetail(id: number): Observable<CommandReportListModel> {
        return this.get('/department/' + id, {});
    }

    /*删除部门关系*/
    public getDeleteList(id: number): Observable<any> {
        return this.delete('/department/' + id, {});
    }

    /*获取部门下拉列表*/
    public getDepartmentNameList(): Observable<DepartmentNameModel> {
        return this.get('/dept-resy-message', {});
    }
}
