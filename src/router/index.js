import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require.ensure([], () =>
  resolve(require('../pages/index')), '/')
const Customer = resolve => require.ensure([], () =>
  resolve(require('../pages/customer')), '/customer')
const Visit = resolve => require.ensure([], () =>
  resolve(require('../pages/visit')), '/visit')
const Business = resolve => require.ensure([], () =>
  resolve(require('../pages/business')), '/business')
const CustomerDetail = resolve => require.ensure([], () =>
  resolve(require('../pages/customer/detail')), '/customer/detail')
const CustomerInfo = resolve => require.ensure([], () =>
  resolve(require('../pages/customer/info')), '/customer/info')
const CustomerEdit = resolve => require.ensure([], () =>
  resolve(require('../pages/customer/edit')), '/customer/edit')
const BusinessDetail = resolve => require.ensure([], () =>
  resolve(require('../pages/business/detail')), '/business/detail')
const BusinessRecord = resolve => require.ensure([], () =>
  resolve(require('../pages/business/record')), '/businiess/record')
const BusinessStatistics = resolve => require.ensure([], () =>
  resolve(require('../pages/business/statistics')), '/business/statistics')
const visitdetail = resolve => require.ensure([], () =>
  resolve(require('../pages/visit/detail')), '/visit/detail')
const visitcreate = resolve => require.ensure([], () =>
  resolve(require('../pages/visit/create')), '/visit/create')
const visitsignout = resolve => require.ensure([], () =>
  resolve(require('../pages/visit/signout')), '/visit/signout')
const visitdetailedit = resolve => require.ensure([], () =>
  resolve(require('../pages/visit/detail/edit')), '/visit/detail/edit')
const visitcreatechoose = resolve => require.ensure([], () =>
  resolve(require('../pages/visit/create/choose')), '/visit/create/choose')

Vue.use(Router)

let routers = new Router({
  routes: [{
    path: '/',
    component: Index
  }, {
    path: '/customer',
    component: Customer
  }, {
    path: '/customer/info/detail',
    component: CustomerDetail
  }, {
    path: '/customer/info',
    component: CustomerInfo
  }, {
    path: '/customer/info/edit',
    component: CustomerEdit
  }, {
    path: '/visit',
    component: Visit
  }, {
    path: '/visit/create/choose',
    component: visitcreatechoose
  }, {
    path: '/visit/detail/edit/:id',
    component: visitdetailedit
  }, {
    path: '/visit/signout',
    component: visitsignout
  }, {
    path: '/visit/create',
    component: visitcreate
  }, {
    path: '/visit/detail',
    component: visitdetail
  }, {
    path: '/business',
    component: Business
  }, {
    path: '/business/detail',
    component: BusinessDetail
  }, {
    path: '/business/detail/record',
    component: BusinessRecord
  }, {
    path: '/business/statistics',
    component: BusinessStatistics
  }]
})

routers.beforeEach((to, from, next) => {
  console.log('to: ', to, '\nfrom: ', from, '\nnext: ', next)

  let disable = JSON.parse(window.sessionStorage.getItem('routerBackDisable'))
  console.log(disable)
  if (disable && disable === true) {
    console.log('next false.')
    next(false)
  } else {
    next(true)
  }
})

export default routers
