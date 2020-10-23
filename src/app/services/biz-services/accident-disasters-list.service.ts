import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {NzMessageService} from 'ng-zorro-antd';

export enum DisasterEnum {
  AccidentDisaster = 2
}

export interface ResponsibilityModel {
  id?: number;
  responsibility: string;
  department: string;
  responsibilityDetail: string[];
  selectTeamResponsibilityDTO: TeamResponsibilityDTO[];
}

export interface TeamResponsibilityDTO {
  teamName: string;
  teamResponsibility: [];
  mainDepartment: string;
  coordinateDepartment: null;
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

/*应急厅管理信息*/
export interface EmergencyModel {
  officeName: string;
  officeResponsibility: string[];
  goods: string[];
}


@Injectable({
  providedIn: 'root'
})
export class AccidentDisastersListService extends BaseHttp {

  constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
    super(http, uri, message);
  }

  /*查询部门岗位信息*/
  public getResponsibility(param: { id: number, planGrade: number }): Observable<ResponsibilityModel[]> {
    return this.get('/responsibility/' + param.id + '/' + param.planGrade, {});
  }

  /*查询应急厅部门岗位*/
  public getEmergency(param: { accidentId: number, planGrade: number }): Observable<EmergencyModel[]> {
    return this.get('/office-responsibility/' + param.accidentId + '/' + param.planGrade, {});
  }

  public getDecideGrade(params: ShowDecideGradeModel): Observable<{ plnId: number, grade: number; }> {
    return this.post('/decide', params);
  }


}
