const state = {
  contract: [
    {
      title: '合同的名称',
      company: '合同的单位',
      money: '价格',
      profit: '赢单（100%）',
      staff: '员工1号',
      updataTime: '2017年2月21日',
      remark: '一段备注'
    }, {
      title: '与阿里的百万合作',
      company: '阿里巴巴',
      money: '100万',
      profit: '初步沟通（10%）',
      staff: '员工1号',
      updataTime: '2017年2月21日',
      remark: '一段备注'
    }, {
      title: '大数据工程',
      company: '技术部门',
      money: '1000万',
      profit: '方案报价（50%）',
      staff: '员工1号',
      updataTime: '2017年2月21日',
      remark: '一段备注'
    }
  ],
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
