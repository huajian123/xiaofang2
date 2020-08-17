import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../services.module';
import {Observable} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd';


export interface LoginModel {
    id?: number;
    account: string;
    password: string;
    createTime?: Date;
    createBy?: string;
    updateTime?: Date;
    updateBy?: string;
    role?: number;
}

@Injectable({
    providedIn: 'root'
})

export class LoginService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    public UserLogin(params: LoginModel): Observable<LoginModel> {
        return this.post('/user/login', params);
    }

}



