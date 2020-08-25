export function getHazardousOneTabObj(leftDivName) {
  /*995*/
  if (leftDivName === '省级接警') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 1},
        ]
      }
    ];
  }
  if (leftDivName === '预警监测') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 2},
          {name: '危化处', id: 3},
          {name: '风险监测和综合减灾处', id: 4},
        ]
      },
      {name: '省气象局', id: 13},
    ];
  }
  if (leftDivName === '灾情研判分析') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 7},
          {name: '危化处', id: 6},
        ]
      }
    ];
  }
  if (leftDivName === '应急响应建议') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 7},
          {name: '危化处', id: 6},
        ]
      }
    ];
  }
  if (leftDivName === '信息研判') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 7},
          {name: '危化处', id: 6},
        ]
      }
    ];
  }
  if (leftDivName === '信息上报') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 8},
          {name: '办公室', id: 9},
        ]
      },
      {name: '应急管理办公室', id: 10},
    ];
  }
  if (leftDivName === '先期处置') {
    return [
      {name: '事发地单位', id: 11},
      {name: '事发地人民政府', id: 12},
    ];
  }
  if (leftDivName === '启动应急响应') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 13},
          {name: '办公室', id: 15},
          {name: '区域合作处', id: 14}]
      },
      {name: '省指挥部', id: 2},
    ];
  }
  if (leftDivName === '分组开展应急救援工作') {
    return [
      {
        name: '综合协调组', id: 17,
        children: [
          {name: '综合协调组', id: 17},
          {name: '省人民政府', id: 18},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '事发地人民政府', id: 18},
              {name: '省指挥部成员单位', id: 19},
            ]
          },
        ]
      },
      {
        name: '专业处置组', id: 21,
        children: [
          {name: '专业处置组', id: 21},
          {name: '省消防救援总队', id: 22},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省军区', id: 23},
              {name: '武警江苏省总队', id: 24},
              {name: '事发地人民政府', id: 25},
              {name: '事发地单位', id: 26},
            ]
          },
        ]
      },
      {
        name: '警戒疏散组', id: 27,
        children: [
          {name: '警戒疏散组', id: 27},
          {name: '省公安厅', id: 28},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '事发地人民政府', id: 29},
              {name: '事发地单位', id: 30},
            ]
          },
        ]
      },
      {
        name: '交通管制组', id: 31,
        children: [
          {name: '交通管制组', id: 31},
          {name: '省公安厅', id: 32},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '事发地人民政府', id: 33},
            ]
          },
        ]
      },
      {
        name: '医疗救护组', id: 34,
        children: [
          {name: '省卫生健康委', id: 34},
          {name: '省卫生健康委', id: 35},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '事发地人民政府', id: 36},
            ]
          },
        ]
      },
      {
        name: '环境气象监测组', id: 37,
        children: [
          {name: '环境气象监测组', id: 37},
          {name: '省生态环境厅', id: 38},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省自然资源厅', id: 39},
              {name: '省住房和城乡建设厅', id: 40},
              {name: '省交通运输厅', id: 41},
              {name: '省水利厅', id: 42},
              {name: '省农业农村厅', id: 43},
              {name: '省卫生健康委', id: 44},
              {name: '省林业局', id: 45},
              {name: '省气象局', id: 46},
              {name: '江苏海事局', id: 47},
              {name: '连云港海事局', id: 48},
            ]
          },
        ]
      },
      {
        name: '综合保障组', id: 49,
        children: [
          {name: '综合保障组', id: 49},
          {name: '省人民政府', id: 50},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省发展和改革委员会', id: 51},
              {name: '省财政厅', id: 52},
              {name: '省住房和城乡建设厅', id: 53},
              {name: '省交通运输厅', id: 54},
              {name: '省水利厅', id: 55},
              {name: '省商务厅', id: 56},
              {name: '救灾和物资保障处', id: 57},
              {name: '省粮食物资储备局', id: 58},
            ]
          },
        ]
      },
      {
        name: '应急专家组', id: 62,
        children: [
          {name: '应急专家组', id: 62},
          {name: '应急管理办公室', id: 63},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省生态环境厅', id: 64},
              {name: '省卫生健康委', id: 65},
              {name: '应急管理厅(危化处)', id: 66},
              {name: '省事发地单位', id: 67},
            ]
          },
        ]
      },
      {
        name: '舆情新闻组', id: 68,
        children: [
          {name: '舆情新闻组', id: 68},
          {name: '省委宣传部', id: 69},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '事发地人民政府', id: 70},
              {name: '应急管理办公室', id: 71},
              {name: '应急管理厅(办公室)', id: 72},
            ]
          },
        ]
      }
    ];
  }
  if (leftDivName === '救援投入方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 73},
          {name: '危化处', id: 74},
          {name: '区域合作处', id: 75}]
      }
    ];
  }
  // 救灾资金物资支持方案
  if (leftDivName === '物资支持方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '救灾和物资保障处', id: 76},
          {name: '办公室', id: 77},
        ]
      },
    ];
  }
  if (leftDivName === '新闻方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '救灾和物资保障处', id: 76},
          {name: '办公室', id: 77},
        ]
      },
    ];
  }
  if (leftDivName === '通信保障方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '科技和信息化处', id: 78}
        ]
      },
      {name: '通信管理局', id: 79},
      {name: '江苏能源监管办', id: 80},
      {name: '电力公司', id: 81},
    ];
  }
  if (leftDivName === '现场信息采集') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 82},
          {name: '科技和信息化处', id: 83}
        ]
      },
      {name: '省气象局', id: 84},
      {name: '省生态环境厅', id: 85},
      {name: '省民政厅', id: 86},
      {name: '省教育厅', id: 87},
      {name: '江苏海事局', id: 88},
      {name: '连云港海事局', id: 89},
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
  if (leftDivName === '通信电力保障方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '科技和信息化处', id: 78}
        ]
      },
      {name: '省通信管理局', id: 79},
      {name: '江苏能源监管办', id: 80},
      {name: '省电力公司', id: 81},
    ];
  }
  if (leftDivName === '辅助指挥决策信息') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 91},
          {name: '科技和信息化处', id: 90}
        ]
      }
    ];
  }
  // 救援力量调度及保障
  if (leftDivName === '救援力量调度及保障') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 73},
          {name: '危化处', id: 74},
          {name: '区域合作处', id: 75}]
      }
    ];
  }
  if (leftDivName === '应急物资调度及保障') {
    return [
      {name: '救灾和物资保障处', id: 76},
      {name: '办公室', id: 77},
    ];
  }
  if (leftDivName === '应急保障') {
    return [
      {
        // 救援力量调度及保障
        name: '救援调度及保障', id: 995,
        children: [
          {
            name: '应急管理厅', id: 0,
            children: [
              {name: '应急指挥中心', id: 73},
              {name: '危化处', id: 74},
              {name: '区域合作处', id: 75}]
          }
        ]
      },
      {
        // 应急物资调度及保障
        name: '物资调度及保障', id: 994,
        children: [
          {name: '救灾和物资保障处', id: 76},
          {name: '办公室', id: 77},
        ]
      },
      {
        // 通信电力保障方案
        name: '通信电力保障', id: 993,
        children: [
          {
            name: '应急管理厅', id: 0,
            children: [
              {name: '科技和信息化处', id: 78}
            ]
          },
          {name: '省通信管理局', id: 79},
          {name: '江苏能源监管办', id: 80},
          {name: '省电力公司', id: 81},
        ]
      },
    ];
  }
  if (leftDivName === '善后处理与事故调查') {
    return [
      {name: '事发地人民政府', id: 95},
      {name: '省卫生健康委', id: 96},
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
