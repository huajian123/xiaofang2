import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../services.module';
import {Observable} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd';


export interface DepartInfoModel {
  id?: number;
  accidentName?: number;
  responsibilityEntities: ResponsibilityEntitiesModel;
}

export interface ResponsibilityEntitiesModel {
  id?: number;
  accidentPlanId?: number;
  responsibilityName?: string;
  responsibilityDetail?: string;
  completeSchedule?: string;
  linkman: string;
  coordinate?: number;
  linkPhone: string;
  responsibilityDetailSort: string[];
}

/*export interface DataShowModel {
  duty: string[];
  linkPeople: string;
  linkPhone: string;
}*/

export interface CitiesNameModel {
  id: number;
  cityName: string;
  emergentUrl: string;
  countDTOS: CountDTOSModel[];
}

export interface CountDTOSModel {
  id: number;
  cityId?: number;
  countName: string;
  emergentUrl: string;
}

export interface UpdateScheduleDTO {
  completeSchedule: string;
  id: number;
}

// 已经发布预警信息
export interface PublishAlarmModel {
  id: number;
  accidentName: string;
  accidentId: number;
  accidentGrade: number;
  accidentPublish: boolean; // 是否已经发布
  accidentAddress: string;
}

@Injectable({
  providedIn: 'root'
})

export class CitiesNameService extends BaseHttp {

  constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
    super(http, uri, message);
  }

  public getCitiesNameList(): Observable<CitiesNameModel[]> {
    return this.get('/cities', {});
  }

  public getNameList(param: { id: number, type: number }): Observable<any> {
    return this.get('/city', {id: param.id, type: param.type});
  }


  public getGroupInfo(param: { id: number, cityName?: string }): Observable<DepartInfoModel> {
    return this.get('/responsibility/' + param.id, param);
  }

  /*根据小组id查询配合部门*/
  public getGroupIdInfo(param: { id: number, cityName: string }): Observable<ResponsibilityEntitiesModel[]> {
    return this.get('/coordinate/' + param.id, param);
  }

  /*根据小组id查询配合部门详情*/
  public getGroupIdInfoDetail(id): Observable<ResponsibilityEntitiesModel> {
    return this.get('/coordinate-detail/' + id);
  }

  /*完成进度修改*/
  public getSchedule(params: UpdateScheduleDTO): Observable<UpdateScheduleDTO> {
    return this.put('/schedule', params);
  }

  public getPublishAlarm(): Observable<PublishAlarmModel[]> {
    return this.get('/publish-alarm');
  }

  /*发布预警*/
  public getPublish(params: { id: number, cityName: string }): Observable<any> {
    if (!params.cityName) {
      delete params.cityName;
    }
    return this.get('/publish', params);
  }
}



