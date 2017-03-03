import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index'
import Customer from 'pages/customer'
import Visit from 'pages/visit'
import Business from 'pages/business'
// import CustomerCreate from 'pages/customer/create'
import CustomerDetail from 'pages/customer/detail'
import CustomerInfo from 'pages/customer/info'
import CustomerEdit from 'pages/customer/edit'
// import BusinessCreate from 'pages/business/create'
import BusinessDetail from 'pages/business/detail'
import BusinessRecord from 'pages/business/record'
import BusinessStatistics from 'pages/business/statistics'
import visitdetail from 'pages/visit/detail'
import visitcreate from 'pages/visit/create'
import visitsignout from 'pages/visit/signout'
import visitdetailedit from 'pages/visit/detail/edit'
import visitcreatechoose from 'pages/visit/create/choose'

Vue.use(Router)

let router = new Router({
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
    path: '/visit/detail/edit',
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

export default router
