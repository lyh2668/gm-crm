import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index'
import Customer from 'pages/customer'
import Visit from 'pages/visit'
import Business from 'pages/business'
import CustomerCreate from 'pages/customer/create'
import CustomerDetail from 'pages/customer/detail'
import CustomerInfo from 'pages/customer/info'
import CustomerEdit from 'pages/customer/edit'
import BusinessCreate from 'pages/business/create'
import BusinessDetail from 'pages/business/detail'
import BusinessRecord from 'pages/business/record'
import BusinessStatistics from 'pages/business/statistics'
import visitdetail from 'pages/visit/detail'
import visitcreate from 'pages/visit/create'
import visitsignout from 'pages/visit/signout'
import visitdetailedit from 'pages/visit/detail/edit'
import visitcreatechoose from 'pages/visit/create/choose'

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

console.log(routers)

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
