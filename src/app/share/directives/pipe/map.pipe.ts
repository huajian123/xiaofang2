import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

export enum DateFormat {
  Date = 'yyyy-MM-dd',
  DateHour = 'yyyy-MM-dd HH',
  DateTime = 'yyyy-MM-dd HH:mm',
}

export enum MapKeyType {
  String,
  Number,
  Boolean
}

export const MapSet = {
  accidentType: {
    1: '自然灾害类',
    2: '事故灾害类',
    // 3: '公共卫生类',
    // 4: '社会安全类',
  },
  naturalDisastersType: {
    2: '地震',
    1: '防汛防旱',
    3: '气象灾害',
    4: '自然灾害',
    5: '地质灾害',
    6: '台风',
  },
  accidentDisastersType: {
    20: '危险化学品事故',
    21: '重特大生产安全事故',
    // 7: '重特大道路交通事故',
    8: '突发环境事件',
    //  9: '辐射',
    //  10: '太湖蓝藻',
    //  11: '太湖湖泛',
    12: '重污染天气',
    //  13: '核应急',
    14: '特种设备事故',
    15: '铁路事故',
    //  16: '港口危险化学品',
    //  17: '大面积停电',
    18: '重特大火灾事故',
    //   19: '通信保障',
    22: '森林火灾事故',
    //   23: '水上搜救',
   // 24: '轨道交通运营事故',
  },
  publicHealthType: {
    25: '食品安全',
    26: '突发公共卫生',
    27: '公共卫生医疗救急',
    28: '鼠疫控制',
    29: '流感',
    30: '动物疫情',
    31: '药品医疗器械',
  },
  socialSecurityType: {
    32: '恐怖袭击',
    33: '群体性事件',
    34: '价格异动',
    35: '粮食应急',
    36: '网络与信息安全',
    37: '涉外突发',
    38: '金融突发',
    39: '政府性债务',
    40: '军粮应急',
    41: '救灾物资',
  },
  disasterLevel: {
    1: '一级灾害',
    2: '二级灾害',
    3: '三级灾害',
    4: '四级灾害',
  },
  earthquakeEconomicLevel: {
    1: '直接经济损失占我省上半年地区生产总值1%以上',
    2: '严重经济损失',
    3: '较重经济损失',
    4: '一定经济损失',
  },
  roleManage: {
    1: '管理员',
    0: '普通用户'
  },
  warningLevel: {
    1: '红色',
    2: '橙色',
    3: '黄色',
    4: '蓝色',
  },
  startLevel: {
    1: 'Ⅰ级',
    2: 'Ⅱ级',
    3: 'Ⅲ级',
    4: 'Ⅳ级',
  },
  stormLevel: {
    1: '红色警报',
    2: '橙色警报',
    3: '黄色警报',
    4: '蓝色警报',
  },
  dangerLevel: {
    1: '特别重大险情',
    2: '重大险情',
    3: '较大险情',
    4: '一般险情',
  }
};

export interface MapItem {
  label: string;
  value: any;
}

@Pipe({
  name: 'map',
})
export class MapPipe implements PipeTransform {
  private datePipe: DatePipe = new DatePipe('en-US');
  private mapObj = MapSet;

  static transformMapToArray(data: any, mapKeyType: MapKeyType = MapKeyType.Number): MapItem[] {
    return Object.keys(data || {}).map(key => {
      let value: any;
      switch (mapKeyType) {
        case MapKeyType.Number:
          value = Number(key);
          break;
        case MapKeyType.Boolean:
          value = key === 'true';
          break;
        case MapKeyType.String:
        default:
          value = key;
          break;
      }
      return {value, label: data[key]};
    });
  }

  transform(value: any, arg?: any): any {
    if (arg === undefined) {
      return value;
    }
    let type: string = arg;
    let param = '';

    if (arg.indexOf(':') !== -1) {
      type = arg.substring(0, arg.indexOf(':'));
      param = arg.substring(arg.indexOf(':') + 1, arg.length);
    }

    switch (type) {
      case 'date':
        return this.datePipe.transform(value, param);
      default:
        return (this.mapObj[type] ? this.mapObj[type][value] : '');
    }
  }
}
