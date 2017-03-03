import Vue from 'vue'
import Router from 'vue-router'
// import Index from 'pages/index'
// import Customer from 'pages/customer'
// import Visit from 'pages/visit'
// import Business from 'pages/business'
// import CustomerCreate from 'pages/customer/create'
// import CustomerDetail from 'pages/customer/detail'
// import CustomerInfo from 'pages/customer/info'
// import CustomerEdit from 'pages/customer/edit'
// import BusinessCreate from 'pages/business/create'
// import BusinessDetail from 'pages/business/detail'
// import BusinessRecord from 'pages/business/record'
// import BusinessStatistics from 'pages/business/statistics'
// import visitdetail from 'pages/visit/detail'
// import visitcreate from 'pages/visit/create'
// import visitsignout from 'pages/visit/signout'
// import visitdetailedit from 'pages/visit/detail/edit'
// import visitcreatechoose from 'pages/visit/create/choose'

const Index = resolve => require.ensure([], () =>
  resolve(require('../pages/index')), '/')
const Customer = resolve => require.ensure([], () =>
  resolve(require('../pages/customer')), '/customer')
const Visit = resolve => require.ensure([], () =>
  resolve(require('../pages/visit')), '/visit')
const Business = resolve => require.ensure([], () =>
  resolve(require('../pages/business')), '/business')
const CustomerCreate = resolve => require.ensure([], () =>
  resolve(require('../pages/customer/create')), '/customer/create')
const CustomerDetail = resolve => require.ensure([], () =>
  resolve(require('../pages/customer/detail')), '/customer/detail')
const CustomerInfo = resolve => require.ensure([], () =>
  resolve(require('../pages/customer/info')), '/customer/info')
const CustomerEdit = resolve => require.ensure([], () =>
  resolve(require('../pages/customer/edit')), '/customer/edit')
const BusinessCreate = resolve => require.ensure([], () =>
  resolve(require('../pages/business/create')), '/business/create')
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
    path: '/customer/create',
    component: CustomerCreate
  }, {
    path: '/customer/detail/:text',
    component: CustomerDetail
  }, {
    path: '/customer/info/:text',
    component: CustomerInfo
  }, {
    path: '/customer/edit',
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
    path: '/visit/signout/:id',
    component: visitsignout
  }, {
    path: '/visit/create',
    component: visitcreate
  }, {
    path: '/visit/detail/:id',
    component: visitdetail
  }, {
    path: '/business',
    component: Business
  }, {
    path: '/business/create',
    component: BusinessCreate
  }, {
    path: '/business/detail',
    component: BusinessDetail
  }, {
    path: '/business/record',
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
