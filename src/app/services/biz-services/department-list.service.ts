import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {PageInfo, SearchCommonVO} from '../../VO/types';
import {NzMessageService} from 'ng-zorro-antd';


export interface DepartmentsManagementListModel {
    id?: number;
    departmentName: string;
    departmentPhone: string;
    createTime?: Date;
    createBy: string;
    updateTime?: Date;
    updateBy: string;
    delFlag?: boolean;
}

export interface SearchModel {
    name?: string;
}

@Injectable({
    providedIn: 'root'
})
export class DepartmentsManagementListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    /*部门列表*/
    public getDepartmentsList(params: SearchCommonVO<SearchModel>): Observable<PageInfo<DepartmentsManagementListModel>> {
        return this.post('/depts', params);
    }

    /*新增部门*/
    public addDepartments(params: DepartmentsManagementListModel): Observable<DepartmentsManagementListModel> {
        return this.post('/dept', params);
    }

    /*编辑部门*/
    public editDepartments(params: DepartmentsManagementListModel): Observable<DepartmentsManagementListModel> {
        return this.put('/dept/' + params.id, params);
    }

    /*部门详情*/
    public getDepartmentsDetail(id: number): Observable<DepartmentsManagementListModel> {
        return this.get('/dept/' + id, {});
    }

    /*删除部门*/
    public getDepartmentsDelete(id: number): Observable<any> {
        return this.delete('/dept/' + id, {});
    }
}
