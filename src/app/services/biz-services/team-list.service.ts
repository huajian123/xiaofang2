import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {PageInfo, SearchCommonVO} from '../../VO/types';
import {NzMessageService} from 'ng-zorro-antd';
import {CommandReportListModel} from './command-report-list.service';

export interface TeamListModel {
    id?: number;
    responsibilityName: string;
    responsibilityDetail: string;
    createTime?: Date;
    createBy: string;
    updateTime?: Date;
    updateBy: string;
    delFlag?: boolean;
}


@Injectable({
    providedIn: 'root'
})
export class TeamListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    /*小队岗位列表*/
    public getTeamList(params: SearchCommonVO<any>): Observable<PageInfo<TeamListModel>> {
        return this.post('/resys', params);
    }

    /*新增小队岗位*/
    public addTeamJobs(params: TeamListModel): Observable<TeamListModel> {
        return this.post('/resy', params);
    }

    /*编辑小队岗位*/
    public editTeamJobs(params: TeamListModel): Observable<TeamListModel> {
        return this.put('/resy/' + params.id, params);
    }

    /*小队岗位详情*/
    public getTeamJobsDetail(id: number): Observable<CommandReportListModel> {
        return this.get('/resy/' + id, {});
    }

    /*删除小队岗位*/
    public getTeamJobsDelete(id: number): Observable<any> {
        return this.delete('/resy/' + id, {});
    }

}
