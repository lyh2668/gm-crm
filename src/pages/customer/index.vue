<template lang="html">
  <div class="customer">
    <gm-header>
      <gm-button icon="back" slot="left" @click="back">返回</gm-button>
      <div class="title">{{ title }}</div>
      <gm-button icon="add" @click="show" slot="right"></gm-button>
    </gm-header>
    <gm-screen-bar class="screen-bar">
      <gm-button icon="search" @click="search">搜索</gm-button>
      <gm-button class="drop triangle-down">筛选</gm-button>
      <gm-button class="drop triangle-down">最新创建</gm-button>
    </gm-screen-bar>
    <div class="search-wrapper" v-show="searchShow">
      <search class="search" placeholder="搜索客户名/联系人名/电话" :results="list" @on-change="showResult" v-model="value"></search>
      <div class="search-hook" @click="searchHidden"></div>
    </div>
    <div class="customer-list">
      <scroller lock-x height="-88px" ref="scroller" :use-pulldown="true" :pulldown-config="pulldownConfig" @on-pulldown-loading="onpulldown">
        <div class="box">
          <router-link :to="{path:'customer/info', query:{name: customer.name}}" class="customer-item" v-for="customer in customers">{{customer.name}}</router-link>
        </div>
      </scroller>
    </div>
    <transition name="opacity">
      <customer-create class="create" v-show="showCreate" @complete="notShow" @back="notShow"></customer-create>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import gmScreenBar from 'components/screenBar'
  import customerCreate from 'components/customerCreate'
  import { Scroller, Search } from 'vux'

  export default {
    components: {
      gmHeader,
      gmButton,
      gmScreenBar,
      Scroller,
      Search,
      customerCreate
    },
    created () {
      this.$http.get('/api/customer?uid=4').then((response) => {
        this.customers = response.data
        if (this.$store.state.customer.customerList.length !== 0) {
          this.customers = this.customers.concat(this.$store.state.customer.customerList)
        }
        this.$nextTick(() => {
          this.$refs.scroller.reset({
            top: 0
          })
        })
      }, (response) => {
        console.log('未取到数据')
      })
    },
    methods: {
      showResult (val) {
        this.list = []
        this.customers.forEach((customer) => {
          if (customer.name) {
            if (customer.name.indexOf(val) >= 0 && val !== '') {
              this.list.push({
                title: customer.name,
                other: 0
              })
            }
          }
        })
      },
      onpulldown () {
        this.$http.get('/api/customer').then((response) => {
          this.customers = response.data
          if (JSON.parse(window.localStorage.getItem('mycustomers'))) {
            this.customers = this.customers.concat(JSON.parse(window.localStorage.getItem('mycustomers')))
          }
          setTimeout(() => {
            this.$refs.scroller.donePulldown()
          }, 1000)
        }, (response) => {
          console.log('未取到数据')
        })
      },
      search () {
        this.searchShow = true
      },
      searchHidden () {
        this.searchShow = false
      },
      fliter () {
      },
      create () {
      },
      back () {
        this.$router.go(-1)
      },
      notShow () {
        this.showCreate = false
      },
      show () {
        this.showCreate = true
      }
    },
    data () {
      return {
        showCreate: false,
        searchShow: false,
        list: [],
        value: '',
        pulldownConfig: {
          content: '下拉刷新',
          height: 60,
          autoRefresh: false,
          downContent: '下拉刷新',
          upContent: '松开刷新',
          loadingContent: '加载中...',
          clsPrefix: 'xs-plugin-pulldown-'
        },
        customers: [],
        title: '客户'
      }
    }
  }
</script>

<style lang="scss">
@import "../../common/scss/mixin.scss";
.opacity-enter {
  opacity: 0;
}
.opacity-enter-active {
  transition: all .6s linear;
}
.opacity-leave-active {
  opacity: 0;
  transition: all .6s linear;
}
.customer {
  background-color: #fff;
  .screen-bar {
    .drop {
      @include triangle-down(#777);
    }
  }
  .create {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
  }
  .search-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    width: 100%;
    height: 100vh;
    .search-hook {
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.8);
    }
  }
  .customer-list {
    z-index: 2;
    .customer-item {
      display: block;
      padding: 10px 0;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      margin-left: 20px;
      color: black;
      span {
        padding-left: 2px;
      }
    }
  }
}
</style>
