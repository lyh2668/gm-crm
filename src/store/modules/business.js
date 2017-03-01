const state = {
  contract: [],
  conDetail:
  {
    title: '合同的名称',
    company: '合同的单位',
    money: '价格',
    profit: '赢单（100%）',
    expectTime: '2017年2月20日',
    remark: '一段备注',
    staff: '员工',
    stage: [{
      staff: '张三',
      updataTime: '2017年2月20日',
      text: '这是一段跟进的记录'
    }, {
      staff: '李四',
      updataTime: '2017年2月22日',
      text: '这又是一段跟进的记录'
    }]
  }
}
// 这时个计算的东西，贼垃圾
const getters = {

}
// 简单的方法 commit
const mutations = {

}
// 复杂的方法，反正我是这么理解 dispatch
const actions = {

}

const business = {
  state,
  getters,
  actions,
  mutations
}

export default business
