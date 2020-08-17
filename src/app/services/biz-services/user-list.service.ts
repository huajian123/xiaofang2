import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../services.module';
import {Observable} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd';
import {PageInfo} from '../../VO/types';


export interface UserManageModel {
    id?: number;
    account: string;
    password: string;
    createTime?: Date;
    createBy?: string;
    updateTime?: Date;
    updateBy?: string;
    role?: number;
    delFlag?: number;
}

export interface UpdatePasswordDTOModel {
    id: number;
    password: string;
    role: number;
}

export interface AddUserDTOModel {
    account: string;
    createBy: string;
    password: string;
    role: number;
}

@Injectable({
    providedIn: 'root'
})

export class UserManageService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    /*查询用户列表*/
    public userLoginList(params): Observable<PageInfo<UserManageModel>> {
        return this.post('/users', params);
    }

    /*删除用户账号*/
    public userDelete(params: { delId: number, myId: number }): Observable<any> {
        return this.delete('/user', params);
    }

    /*编辑用户账号*/
    public userEdit(params: UpdatePasswordDTOModel): Observable<any> {
        return this.put('/user', params);
    }

    /*新增用户账号*/
    public addUser(params: AddUserDTOModel): Observable<AddUserDTOModel> {
        return this.post('/user', params);
    }

    /*查询账户详情*/
    public getUserDetail(id: number): Observable<UserManageModel> {
        return this.get('/user/' + id, {});
    }

}



