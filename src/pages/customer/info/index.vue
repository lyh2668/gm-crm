<template>
  <div class="customerInfo">
    <gm-header>
      <gm-button icon="back" slot="left" @click="back">返回</gm-button>
      <div class="title">客户信息</div>
      <router-link :to="{path:'/customer/info/edit',query:{name: customer.name}}" slot="right"><gm-button>编辑</gm-button></router-link>
    </gm-header>
    <Scroller lock-x height="-48px">
      <div class="wrapper">
        <div class="header-wrapper">
          <div class="img-blur">
            <img :src="src">
          </div>
          <router-link :to="{path:'/customer/info/detail', query:{name: customer.name}}" class="content-wrapper">
            <p>{{$route.query.name}}</p>
            <p>无跟进记录</p>
            <p>{{contacts}}</p>
            <span class="icon-keyboard-arrow-right"></span>
          </router-link>
        </div>
        <gm-screen-bar>
          <gm-button>商机(0)</gm-button>
          <gm-button>定时提醒(0)</gm-button>
        </gm-screen-bar>
        <split text=""></split>
        <div>
          <group gutter="0">
            <selector value="无" title="跟进人" :options="['无']"></selector>
            <selector :value="statusOptions[customer.customerStatus]||statusOptions[0]" title="客户状态" :options="['无', '小型客户', '中型客户', '大型客户']"></selector>
            <selector :value="classifyOptions[customer.customerType]||classifyOptions[0]" title="客户分级" :options="['无', '新建的客户', '潜在客户', '成交客户', '长期客户', '流失客户']"></selector>
          </group>
        </div>
        <split text=""></split>
        <div class="followup-wrapper">
          <p>跟进记录</p>
        </div>
      </div>
    </Scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import gmScreenBar from 'components/screenBar'
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import split from 'components/split'
  import { Group, Selector, Scroller } from 'vux'
  var ICONLEFT = 0
  var ELLIPSIS = 2
  var LEFT = 0
  export default {
    components: {
      gmScreenBar,
      gmHeader,
      gmButton,
      split,
      Group,
      Selector,
      Scroller
    },
    created () {
      // console.log(this.$route.query.text)
      this.$http.get('/api/customer?uid=4').then((response) => {
        this.customers = response.data
        if (JSON.parse(window.localStorage.getItem('mycustomers'))) {
          this.customers = this.customers.concat(JSON.parse(window.localStorage.getItem('mycustomers')))
        }
        // console.log(this.customers)
        this.customers.forEach((customer) => {
          if (customer.name === this.$route.query.name) {
            this.customer = customer
          } else {
            customer = {}
          }
        })
      }, (response) => {
        console.log('未取到数据')
      })
    },
    computed: {
      contacts () {
        if (this.customer.contacts) {
          return this.customer.contacts[0].name
        }
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    },
    data () {
      return {
        classifyOptions: ['无', '新建的客户', '潜在客户', '成交客户', '长期客户', '流失客户'],
        statusOptions: ['无', '小型客户', '中型客户', '大型客户'],
        customer: {},
        customers: [],
        type: {
          cancelType: ICONLEFT,
          title: '客户信息',
          nextType: ELLIPSIS
        },
        src: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        navName: [
          {
            icon: LEFT,
            name: '商机(0)',
            type: '',
            class: 'icon-rmb'
          },
          {
            icon: LEFT,
            name: '定时提醒(0)',
            type: '',
            class: 'icon-ring'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .customerInfo {
    .wrapper {
      .header-wrapper {
        width: 100%;
        height: 100px;
        position: relative;
        .img-blur {
          position: absolute;
          z-index: -2;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          img {
            width: calc(100% + 60px);
            height: calc(100% + 60px);
            -webkit-filter: blur(10px);
            // filter: blur(10px);
            margin: -30px;
          }
        }
      }
      .content-wrapper {
        padding: 15px 15px 10px 15px;
        position: relative;
        display: block;
        p {
          line-height: 25px;
          font-size: 16px;
          color: #fff;
        }
        .icon-keyboard-arrow-right {
          position: absolute;
          right: 15px;
          top: 15px;
          font-size: 16px;
          color: #fff;
          line-height: 25px;
        }
      }
      .followup-wrapper {
        p {
          padding: 10px;
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        }
      }
    }
  }
</style>
