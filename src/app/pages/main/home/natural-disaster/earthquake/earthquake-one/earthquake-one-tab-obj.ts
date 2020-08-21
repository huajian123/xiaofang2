export function getEarthquakeOneTabObj(leftDivName) {
  if (leftDivName === '省级接警') {
    return [
      {name: '应急管理厅', id: 202},
      {name: '地震局', id: 203},
    ];
  }
  if (leftDivName === '预警监测') {
    return [
      {name: '应急管理厅', id: 204},
      {name: '地震局', id: 205}
    ];
  }
  if (leftDivName === '灾情研判分析') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '救灾处', id: 160},
          {name: '应急指挥中心', id: 158},
          {name: '地震地质处', id: 161}
        ]
      },
      {name: '地震局', id: 157},
      {name: '省消防总队', id: 159}
    ];
  }
  if (leftDivName === '信息上报') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 163},
          {name: '地震地质处', id: 164},
          {name: '办公室', id: 166},
        ]
      },
      {name: '应急管理办公室', id: 10},
    ];
  }
  if (leftDivName === '先期处置') {
    return [
      {name: '事发地人民政府', id: 167},
    ];
  }
  if (leftDivName === '应急响应建议') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [{
          name: '地震地质处', id: 162
        }]
      },
    ];
  }
  if (leftDivName === '启动应急响应') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 209},
          {name: '办公室', id: 206},
          {name: '区域合作处', id: 208},
          {name: '省抗震救灾指挥部', id: 207},
        ]
      }
    ];
  }
  if (leftDivName === '分组开展应急救援工作') {
    return [
      {
        name: '现场指挥部', id: 210,
        children: [{
          name: '省长或分管副省长', id: 211
        }]
      },
      {
        name: '抢险救援组', id: 212,
        children: [
          {name: '应急管理厅和省军区', id: 213},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省公安厅', id: 214},
              {name: '省交通运输厅', id: 215},
              {name: '省地震局', id: 216},
              {name: '江苏海事局', id: 217},
              {name: '省气象局', id: 218},
              {name: '武警江苏省总队', id: 219},
              {name: '省消防救援总队', id: 220}
            ]
          },
        ]
      },
      {
        name: '通信保障组', id: 221,
        children: [
          {name: '省通信管理局', id: 222},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省工业和信息化厅', id: 223},
              {name: '应急管理厅科信处', id: 224},
              {name: '省消防总队相关处室', id: 225},
              {name: '省军区', id: 226},
            ]
          },
        ]
      },
      {
        name: '群众生活保障组', id: 227,
        children: [
          {name: '省应急管理厅救灾处', id: 228},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省发展改革委', id: 229},
              {name: '省工业和信息化厅', id: 230},
              {name: '省民政厅', id: 231},
              {name: '省财政厅', id: 232},
              {name: '省住房城乡建设厅', id: 233},
              {name: '省教育厅', id: 234},
              {name: '省农业农村厅', id: 235},
              {name: '省商务厅', id: 236},
              {name: '省文化和旅游厅', id: 237},
              {name: '省外办', id: 238},
              {name: '省粮食和物资储备局', id: 239},
              {name: '省红十字会', id: 240},
              {name: '团省委', id: 241},
            ]
          },
        ]
      },
      {
        name: '医疗救护组', id: 34,
        children: [
          {name: '省卫生健康委员会', id: 34},
          {name: '省卫生健康委员会', id: 35},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '事发地人民政府', id: 36},
            ]
          },
        ]
      },
      {
        name: '医疗救治和卫生防疫组', id: 37,
        children: [
          {name: '省卫生健康委', id: 37},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省发展改革委', id: 39},
              {name: '省财政厅', id: 40},
              {name: '省应急管理厅救援协调处', id: 41},
              {name: '省交通运输厅', id: 42},
              {name: '省工业和信息化厅', id: 43},
              {name: '南京海关', id: 44},
              {name: '武警江苏省总队', id: 45},
              {name: '省红十字会', id: 46},
            ]
          },
        ]
      },
      {
        name: '基础设施保障和生产恢复组', id: 49,
        children: [
          {name: '省发展改革委', id: 49},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省工业和信息化厅', id: 51},
              {name: '省财政厅', id: 52},
              {name: '省住房和城乡建设厅', id: 53},
              {name: '省交通运输厅', id: 54},
              {name: '省水利厅', id: 55},
              {name: '省商务厅', id: 56},
              {name: '省应急管理厅救灾处', id: 57},
              {name: '省自然资源厅', id: 58},
              {name: '上海铁路局南京办事处', id: 62},
              {name: '省农业农村厅', id: 63},
              {name: '省广电局', id: 62},
              {name: '江苏银保监局', id: 63},
              {name: '民航江苏监管局', id: 62},
            ]
          },
        ]
      },
      {
        name: '地震监测及趋势研判组', id: 62,
        children: [
          {name: '省地震局', id: 62},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '中国地震局', id: 64},
              {name: '外省地震专家', id: 65},
            ]
          },
        ]
      },
      {
        name: '次生灾害防范处置组', id: 68,
        children: [
          {
            name: '省应急管理厅', id: 68,
            children: [
              {name: '危化处', id: 68},
              {name: '风险监测和综合减灾处', id: 68}
            ]
          },
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省公安厅', id: 70},
              {name: '省自然资源厅', id: 71},
              {name: '省消防救援总队', id: 72},
              {name: '省水利厅', id: 70},
              {name: '省住房城乡建设厅', id: 71},
              {name: '省工业和信息化厅', id: 72},
              {name: '省交通运输厅', id: 70},
              {name: '省生态环境厅', id: 71},
              {name: '省人民防空办公室', id: 72},
              {name: '省气象局', id: 73},
              {name: '民航江苏监管局', id: 74},
            ]
          },
        ]
      },
      {
        name: '社会治安组', id: 62,
        children: [
          {name: '省公安厅', id: 62},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省司法厅', id: 64},
              {name: '武警江苏省总队', id: 65},
            ]
          },
        ]
      },
      {
        name: '救灾捐赠与涉外、涉港澳台事务组', id: 62,
        children: [
          {name: '省民政厅和相关部门', id: 62},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省外办', id: 64},
              {name: '省台办', id: 65},
              {name: '南京海关', id: 64},
              {name: '省商务厅', id: 65},
              {name: '省应急管理厅救灾处', id: 64},
              {name: '省文化和旅游厅', id: 65},
              {name: '省红十字会', id: 64},
            ]
          },
        ]
      },
      {
        name: '境外救援队伍协调事务组', id: 62,
        children: [
          {name: '省外办', id: 62},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省台办', id: 64},
              {name: '省商务厅', id: 65},
              {name: '南京海关', id: 64},
              {name: '民航江苏监管局', id: 65},
            ]
          },
        ]
      },
      {
        name: '地震灾害调查及灾情损失评估组', id: 62,
        children: [
          {name: '应急管理厅', id: 62},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省财政厅', id: 64},
              {name: '省自然资源厅', id: 65},
              {name: '省住房城乡建设厅', id: 64},
              {name: '省工业和信息化厅', id: 65},
              {name: '省地震局', id: 64},
              {name: '省国资委', id: 65},
              {name: '江苏银保监局', id: 65},
            ]
          },
        ]
      },
      {
        name: '信息发布及宣传报道组', id: 62,
        children: [
          {name: '省委宣传部', id: 62},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省外办', id: 64},
              {name: '省台办', id: 65},
              {name: '省广电局', id: 64},
              {name: '应急管理厅办公室', id: 65},
              {name: '应急管理厅新闻宣传处', id: 64},
              {name: '省文化和旅游厅', id: 65},
              {name: '省地震局相关处室', id: 65},
            ]
          },
        ]
      }
    ];
  }
  if (leftDivName === '救援力量投入方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '地震地质处', id: 73},
          {name: '救援协调处', id: 74},
          {name: '指挥中心', id: 73},
        ]
      },
      {
        name: '省消防总队相关处室', id: 11
      }
    ];
  }
  if (leftDivName === '通信保障方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '科信处', id: 76},
        ]
      },
      {
        name: '省消防总队', id: 90
      }
    ];
  }
  if (leftDivName === '救灾资金物资支持方案') {
    return [
      {
        name: '省应急管理厅', id: 78,
        children: [
          {name: '救灾处', id: 79}
        ]
      }
    ];
  }
  if (leftDivName === '发布救灾捐赠公告') {
    return [
      {
        name: '省应急管理厅', id: 78,
        children: [
          {name: '救灾处', id: 79}
        ]
      }
    ];
  }
  if (leftDivName === '新闻方案') {
    return [
      {
        name: '省应急管理厅', id: 90,
        children: [
          {name: '新闻处', id: 90}
        ]
      }
    ];
  }
  if (leftDivName === '现场信息采集') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 82},
          {name: '救灾处', id: 82},
          {name: '科信处', id: 83}
        ]
      },
      {name: '省消防总队', id: 83}
      /* {name: '省气象局', id: 84},
       {name: '省生态环境厅', id: 85},
       {name: '省民政厅', id: 86},
       {name: '省教育厅', id: 87},
       {name: '江苏海事局', id: 88},
       {name: '连云港海事局', id: 89},*/
    ];
  }
  if (leftDivName === '辅助指挥决策信息') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '科技和信息化处', id: 90},
          {name: '应急指挥中心', id: 91},
        ]
      },
    ];
  }
  if (leftDivName === '辅助指挥决策一张图') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '科技和信息化处', id: 90},
          {name: '应急指挥中心', id: 91},
        ]
      },
    ];
  }
  if (leftDivName === '事态控制') {
    return [
      {name: '省委宣传部', id: 92},
      {name: '设区市人民政府', id: 93},
      {name: '省指挥部', id: 94},
    ];
  }
  if (leftDivName === '组建现场指挥部') {
    return [
      {name: '省指挥部', id: 318},
    ];
  }
  if (leftDivName === '应急保障') {
    return [
      {
        name: '救援力量投入方案', id: 92,
        children: [
          {
            name: '应急管理厅', id: 0,
            children: [
              {name: '地震地质处', id: 73},
              {name: '救援协调处', id: 74},
              {name: '省消防总队', id: 75},
              {name: '应急指挥中心', id: 77}
            ]
          },
        ]
      },
      {
        name: '通信保障方案', id: 0,
        children: [
          {
            name: '省应急管理厅', id: 76,
            children: [
              {name: '科信处', id: 77},
            ]
          },
          {name: '省消防总队', id: 78}
        ]
      },
      {
        name: '救灾资金物资支持方案', id: 0,
        children: [
          {
            name: '省应急管理厅', id: 78,
            children: [
              {name: '救灾处', id: 79}
            ]
          }
        ]
      },
      {
        name: '发布救灾捐赠公告', id: 79,
        children: [
          {
            name: '省应急管理厅', id: 78,
            children: [
              {name: '救灾处', id: 79}
            ]
          }
        ]
      },
      {
        name: '新闻方案', id: 0,
        children: [
          {
            name: '省应急管理厅', id: 90,
            children: [
              {name: '新闻处', id: 90}
            ]
          }
        ]
      },
    ];
  }
  if (leftDivName === '善后处理与事故调查') {
    return [
      {name: '事发地人民政府', id: 95},
      {name: '省卫生健康委员会', id: 96},
      {name: '省民政厅', id: 97},
      {name: '省生态环境厅', id: 98},
      {name: '保监部门', id: 100},
      {name: '省人民政府', id: 101},
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '调查评估和统计处', id: 102},
        ]
      },
    ];
  }
  /*最后一层*/
}
