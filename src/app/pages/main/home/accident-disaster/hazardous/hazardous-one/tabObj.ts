export function getHazardousTabObj(leftDivName) {
  if(leftDivName==="启动应急响应"){
    return [
      {
        name: "启动应急响应", id: 1,
        children: [
          {name: '启动应急响应111', id: 18},
          {
            name: '启动应急响应', id: 8,
            children: [
              {name: '启动应急响应', id: 9},
              {name: '启动应急响应', id: 10},
            ]
          }]
      },
      {name: "应急管理厅1", id: 2},
      {name: "应急管理厅2", id: 3},
      {name: "应急管理厅3", id: 4},
      {name: "应急管理厅4", id: 5},
      {name: "应急管理厅5", id: 6},
      {name: "应急管理厅5", id: 11},
      {name: "应急管理厅5", id: 12},
      {name: "应急管理厅5", id: 13},
      {name: "应急管理厅5", id: 14},
      {name: "应急管理厅5", id: 15},
    ]
  }
  if(leftDivName==="善后处理与事故调查"){
    return [
      {
        name: "保障方案", id: 1,
        children: [
          {name: '保障方案', id: 7},
          {
            name: '保障方案', id: 8,
            children: [
              {name: '保障方案', id: 9},
              {name: '保障方案', id: 10},
            ]
          }]
      },
    ]
  }
}
