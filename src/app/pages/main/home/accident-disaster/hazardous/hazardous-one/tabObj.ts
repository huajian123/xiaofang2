export function getHazardousTabObj(leftDivName) {
  if(leftDivName==="启动应急响应"){
    return [
      {
        name: "启动应急响应", id: 1,
        children: [
          {name: '启动应急响应111', id: 13},
          {
            name: '启动应急响应', id: 14,
            children: [
              {name: '启动应急响应', id: 15},
              {name: '启动应急响应', id: 16},
            ]
          }]
      },
      {name: "应急管理厅1", id: 2},
      {name: "应急管理厅2", id: 3},
      {name: "应急管理厅3", id: 4},
      {name: "应急管理厅4", id: 5},
      {name: "应急管理厅5", id: 6},
      {name: "应急管理厅6", id: 7},
      {name: "应急管理厅7", id: 8},
      {name: "应急管理厅8", id: 9},
      {name: "应急管理厅9", id: 10},
      {name: "应急管理厅10", id: 11},
    ]
  }
  if(leftDivName==="善后处理与事故调查"){
    return [
      {
        name: "保障方案11", id: 12,
        children: [
          {name: '保障方案', id: 17},
          {
            name: '保障方案', id: 18,
            children: [
              {name: '保障方案', id: 19},
              {name: '保障方案', id: 20},
            ]
          }]
      },
    ]
  }
}
