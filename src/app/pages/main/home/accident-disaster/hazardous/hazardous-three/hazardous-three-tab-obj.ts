export function getHazardousThreeTabObj(leftDivName) {
  if (leftDivName === '事故信息接收') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '应急指挥中心', id: 103},
        ]
      }
    ];
  }
  if (leftDivName === '应急指导') {
    return [
      {
        name: '应急管理厅', id: 0,
        children: [
          {name: '危化处', id: 104},
        ]
      }
    ];
  }
  /*最后一层*/
}
