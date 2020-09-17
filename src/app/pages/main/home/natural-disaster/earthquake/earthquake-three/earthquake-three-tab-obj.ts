export function getEarthquakeThreeTabObj(leftDivName) {
  if (leftDivName === '先期处置') {
    return [
      // 事发地抗震救灾指挥部
      {name: '救灾指挥部', id: 185},
    ];
  }
  if (leftDivName === '事故信息接收') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 188},
        ]
      },
      {name: '地震局', id: 187}
    ];
  }
  if (leftDivName === '应急指导') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '区域合作处', id: 189},
          {name: '地震地质处', id: 190},
        ]
      },
    ];
  }
  if (leftDivName === '灾情报送') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 191},
          {name: '地震地质处', id: 193},
        ]
      },
      {name: '地震局', id: 192},
      {name: '省抗震救灾指挥部', id: 337},
    ];
  }
  if (leftDivName === '应急处置') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '地震地质处', id: 196},
          {name: '新闻宣传处', id: 197},
          {name: '调查评估和统计处', id: 201},
        ]
      },
      {name: '地震局', id: 195},
      {name: '省公安厅', id: 198},
      {name: '省委宣传部', id: 194}
    ];
  }
  /*最后一层*/
}
