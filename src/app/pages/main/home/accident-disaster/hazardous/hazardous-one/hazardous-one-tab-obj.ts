export function getHazardousOneTabObj(leftDivName) {
  if (leftDivName === '启动应急响应') {
    return [
      {
        name: '省应急管理厅', id: 1,
        children: [
          {name: '应急管理厅1', id: 13},
          {
            name: '应急管理厅1', id: 14,
            children: [
              {name: '应急管理厅1', id: 15},
              {name: '应急管理厅1', id: 16},
            ]
          }]
      },
      {name: '省应急管理厅', id: 2},
      {name: '省应急管理厅', id: 3},
      {name: '省应急管理厅', id: 4},
      {name: '省应急管理厅', id: 5},
      {name: '省应急管理厅', id: 6},
      {name: '省应急管理厅', id: 7},
      {name: '省应急管理厅', id: 8},
      {name: '省应急管理厅', id: 9},
      {name: '省应急管理厅', id: 10},
      {name: '省应急管理厅', id: 11},
    ];
  }
  if (leftDivName === '省级接警') {
    return [
      {
        name: '省级接警', id: 12,
        children: [
          {name: '省级接警', id: 17},
          {
            name: '省级接警', id: 18,
            children: [
              {name: '省级接警', id: 19},
              {name: '省级接警', id: 20},
            ]
          }]
      },
    ];
  }
}
