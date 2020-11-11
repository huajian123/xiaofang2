import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {NzMessageService} from 'ng-zorro-antd';


export interface ResponsibilityModelArray {
  planId: number;
  downUrl: string;
  selectResponsibility: ResponsibilityModel[];
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
  additionalProp1?: HazardousModel;
  additionalProp2?: EarthquakeModel;
  additionalProp3?: TyphoonModel;
}

/*危化品*/
export interface HazardousModel {
  peopleDie?: number;
  peopleInjury?: number;
  peopleLoss?: number;
  propertyLoss?: number;
  toxicGas?: number;
}

/*台风*/
export interface TyphoonModel {
  typhoonAlarm?: number;
  rainstormAlarm?: number;
  stormTide?: number;
  countryStartGrade?: number;
}

/*地震*/
export interface EarthquakeModel {
  peopleLossAndDie?: number;
  propertyLossGrade?: number;
  earthquakeLand?: number;
  earthquakeSea?: number;
}

/*应急厅管理信息*/
export interface EmergencyModel {
  officeName: string;
  officeResponsibility: string[];
  goods: string[];
}

/*指令手册数据结构对象*/
export interface EmergencyOrderModel {
  orderPeople: string;
  selectEmergencyOrder: SelectEmergencyOrderModel[];
}

export interface SelectEmergencyOrderModel {
  department: string;
  responsibility: string[];
  unattendedSystem: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccidentDisastersListService extends BaseHttp {

  constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
    super(http, uri, message);
  }

  /*查询部门岗位信息*/
  public getResponsibility(param: { id: number, planGrade: number }): Observable<ResponsibilityModelArray> {
    return this.get('/responsibility/' + param.id + '/' + param.planGrade, {});
  }

  /*查询应急厅部门岗位*/
  public getEmergency(param: { accidentId: number, planGrade: number }): Observable<EmergencyModel[]> {
    return this.get('/office-responsibility/' + param.accidentId + '/' + param.planGrade, {});
  }

  public getDecideGrade(params: ShowDecideGradeModel): Observable<{ plnId: number, grade: number; }> {
    return this.post('/decide', params);
  }

  /*指令手册接口*/
  public getEmergencyOrder(param: { planId: number }): Observable<EmergencyOrderModel> {
    return this.get('/emergency_order/' + param.planId, {});
  }

}
