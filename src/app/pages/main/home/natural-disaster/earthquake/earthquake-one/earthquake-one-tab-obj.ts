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
        name: '医疗救治卫生防疫组', id: 242,
        children: [
          {name: '省卫生健康委', id: 243},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省发展改革委', id: 39},
              {name: '省财政厅', id: 244},
              {name: '省应急管理厅救援协调处', id: 245},
              {name: '省交通运输厅', id: 247},
              {name: '省工业和信息化厅', id: 246},
              {name: '南京海关', id: 248},
              {name: '武警江苏省总队', id: 249},
              {name: '省红十字会', id: 250},
            ]
          },
        ]
      },
      {
        name: '基础设施保障生产恢复组', id: 251,
        children: [
          {name: '省发展改革委', id: 252},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省工业和信息化厅', id: 253},
              {name: '省财政厅', id: 255},
              {name: '省住房和城乡建设厅', id: 257},
              {name: '省交通运输厅', id: 258},
              {name: '省水利厅', id: 260},
              {name: '省商务厅', id: 262},
              {name: '应急管理厅救灾处', id: 254},
              {name: '省自然资源厅', id: 256},
              {name: '上海铁路局南京办事处', id: 259},
              {name: '省农业农村厅', id: 261},
              {name: '省广电局', id: 263},
              {name: '江苏银保监局', id: 264},
              {name: '民航江苏监管局', id: 265},
            ]
          },
        ]
      },
      {
        name: '地震监测趋势研判组', id: 266,
        children: [
          {name: '省地震局', id: 267},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '中国地震局', id: 268},
              {name: '外省地震专家', id: 330},
            ]
          },
        ]
      },
      {
        name: '次生灾害防范处置组', id: 269,
        children: [
          {
            name: '应急管理厅', id: 0,
            children: [
              {name: '危化处', id: 270},
              {name: '风险监测和综合减灾处', id: 331}
            ]
          },
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省公安厅', id: 271},
              {name: '省自然资源厅', id: 272},
              {name: '省消防救援总队', id: 273},
              {name: '省水利厅', id: 274},
              {name: '省住房城乡建设厅', id: 275},
              {name: '省工业和信息化厅', id: 276},
              {name: '省交通运输厅', id: 277},
              {name: '省生态环境厅', id: 278},
              {name: '省人民防空办公室', id: 279},
              {name: '省气象局', id: 280},
              {name: '民航江苏监管局', id: 281},
            ]
          },
        ]
      },
      {
        name: '社会治安组', id: 282,
        children: [
          {name: '省公安厅', id: 283},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省司法厅', id: 284},
              {name: '武警江苏省总队', id: 285},
            ]
          },
        ]
      },
      {
        name: '涉外涉港澳台救灾捐赠事务组', id: 286,
        children: [
          {name: '省民政厅部门', id: 287},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省外办', id: 288},
              {name: '省台办', id: 289},
              {name: '南京海关', id: 290},
              {name: '省商务厅', id: 291},
              {name: '应急管理厅救灾处', id: 292},
              {name: '省文化和旅游厅', id: 293},
              {name: '省红十字会', id: 294},
            ]
          },
        ]
      },
      {
        name: '境外救援队伍协调事务组', id: 295,
        children: [
          {name: '省外办', id: 296},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省台办', id: 297},
              {name: '省商务厅', id: 298},
              {name: '南京海关', id: 299},
              {name: '民航江苏监管局', id: 332},
            ]
          },
        ]
      },
      {
        name: '地震灾害调查损失评估组', id: 300,
        children: [
          {name: '应急管理厅', id: 301},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省财政厅', id: 302},
              {name: '省自然资源厅', id: 303},
              {name: '省住房城乡建设厅', id: 304},
              {name: '省工业和信息化厅', id: 305},
              {name: '省地震局', id: 306},
              {name: '省国资委', id: 307},
              {name: '江苏银保监局', id: 308},
            ]
          },
        ]
      },
      {
        name: '信息发布宣传报道组', id: 309,
        children: [
          {name: '省委宣传部', id: 310},
          {
            name: '配合部门', id: 0,
            children: [
              {name: '省外办', id: 311},
              {name: '省台办', id: 312},
              {name: '省广电局', id: 313},
              {name: '应急管理厅办公室', id: 314},
              {name: '应急管理厅新闻宣传处', id: 315},
              {name: '省文化和旅游厅', id: 316},
              {name: '省地震局', id: 317},
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
          {name: '地震地质处', id: 170},
          {name: '救援协调处', id: 171},
          {name: '应急指挥中心', id: 173},
        ]
      },
      {
        name: '省消防总队', id: 172
      }
    ];
  }
  if (leftDivName === '通信保障方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '科信处', id: 174},
        ]
      },
      {
        name: '省消防总队', id: 175
      }
    ];
  }
  if (leftDivName === '救灾资金物资支持方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '救灾处', id: 176}
        ]
      }
    ];
  }
  if (leftDivName === '发布救灾捐赠公告') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '救灾处', id: 177}
        ]
      }
    ];
  }
  if (leftDivName === '新闻方案') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '新闻处', id: 178}
        ]
      }
    ];
  }
  if (leftDivName === '现场信息采集') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 181},
          {name: '救灾处', id: 182},
          {name: '科信处', id: 184}
        ]
      },
      {name: '省消防总队', id: 183}
    ];
  }
  if (leftDivName === '辅助指挥决策一张图') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '科技和信息化处', id: 180},
          {name: '应急指挥中心', id: 179},
        ]
      },
    ];
  }
  if (leftDivName === '事态控制') {
    return [
      {name: '省委宣传部', id: 320},
      {name: '设区市人民政府', id: 321},
      {name: '省指挥部', id: 322},
    ];
  }
  if (leftDivName === '组建现场指挥部') {
    return [
      {name: '省指挥部', id: 319},
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
              {name: '地震地质处', id: 170},
              {name: '救援协调处', id: 171},
              {name: '应急指挥中心', id: 173},
            ]
          },
          {
            name: '省消防总队', id: 172
          }
        ]
      },
      {
        name: '通信保障方案', id: 0,
        children: [
          {
            name: '应急管理厅', id: 0,
            children: [
              {name: '科信处', id: 174},
            ]
          },
          {
            name: '省消防总队', id: 175
          }
        ]
      },
      {
        name: '救灾资金物资支持方案', id: 0,
        children: [
          {
            name: '应急管理厅', id: 0,
            children: [
              {name: '救灾处', id: 176}
            ]
          }
        ]
      },
      {
        name: '发布救灾捐赠公告', id: 79,
        children: [
          {
            name: '应急管理厅', id: 0,
            children: [
              {name: '救灾处', id: 177}
            ]
          }
        ]
      },
      {
        name: '新闻方案', id: 0,
        children: [
          {
            name: '应急管理厅', id: 0,
            children: [
              {name: '新闻处', id: 178}
            ]
          }
        ]
      },
    ];
  }
  if (leftDivName === '善后处理与事故调查') {
    return [
      {name: '事发地人民政府', id: 323},
      {name: '省卫生健康委员会', id: 324},
      {name: '省民政厅', id: 325},
      {name: '省生态环境厅', id: 326},
      {name: '保监部门', id: 327},
      {name: '省人民政府', id: 328},
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '调查评估和统计处', id: 329},
        ]
      },
    ];
  }
  /*最后一层*/
}
