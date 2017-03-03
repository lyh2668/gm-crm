<template>
  <div class="visit-create-choose">
    <gm-header class="business-header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">选择我的客户</div>
      <!-- <router-link to="/customer/create" slot="right"> -->
      <gm-button @click="shows" slot="right">新建客户</gm-button>
      <!-- </router-link> -->
    </gm-header>
    <scroller lock-x height="-48px" ref="scroller" :use-pulldown="true" :pulldown-config="pulldownConfig" @on-pulldown-loading="onpulldown" class="list-wrapper">
      <div class="scroller-wrapper">
        <div class="search-button" @click="show">
          <span class="icon-search"></span>
          <span>搜索</span>
        </div>
        <div class="customer-item" v-for="customer in customers" @click="choose(customer.name)">{{customer.name}}</div>
      </div>
    </scroller>
    <div class="search-wrapper" v-show="searchShow">
      <search class="search" placeholder="搜索客户名/联系人名/电话" :results="list" @on-change="showResult" @result-click="reClick"></search>
      <div class="search-hook" @click="searchHidden"></div>
    </div>
    <transition name="opacity">
      <customer-create class="create" v-show="showCreate" @complete="notShows" @back="notShows"></customer-create>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import { Scroller, Search } from 'vux'
  import customerCreate from 'components/customerCreate'

  export default {
    components: {
      gmHeader,
      gmButton,
      Scroller,
      Search,
      customerCreate
    },
    created () {
      this.$http.get('/api/customer?uid=3').then((response) => {
        this.customers = response.data
        if (this.$store.state.customer.customerList.length !== 0) {
          for (let i = 0; i < this.$store.state.customer.customerList.length; ++i) {
            this.customers.push(this.$store.state.customer.customerList[i])
          }
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
      back () {
        this.$router.go(-1)
      },
      onpulldown () {
        setTimeout(() => {
          this.$refs.scroller.donePulldown()
        }, 1000)
      },
      show () {
        this.searchShow = true
      },
      searchHidden () {
        this.searchShow = false
      },
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
      choose (name) {
        window.localStorage.setItem('visitName', name)
        window.history.back()
      },
      reClick (item) {
        window.localStorage.setItem('visitName', item.title)
        window.history.back()
      },
      notShows () {
        this.showCreate = false
      },
      shows () {
        this.showCreate = true
      }
    },
    data () {
      return {
        showCreate: false,
        list: [],
        searchShow: false,
        customers: {},
        pulldownConfig: {
          content: '下拉刷新',
          height: 60,
          autoRefresh: false,
          downContent: '下拉刷新',
          upContent: '松开刷新',
          loadingContent: '加载中...',
          clsPrefix: 'xs-plugin-pulldown-'
        }
      }
    }
  }
</script>

<style lang="scss">
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
  .visit-create-choose {
    // position: relative;
    background: #fff;
    .search-wrapper {
      position: fixed;
      z-index: 30;
      width: 100%;
      height: 100%;
      .search-hook {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(7, 17, 27, 0.8);
      }
    }
    .create {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 50;
      width: 100%;
    }
    .list-wrapper {
      .search-button {
        width: calc(100% - 16px);
        background: rgb(239, 239, 244);
        border: none;
        border-radius: 5px;
        margin: 8px;
        text-align: center;
        font-size: 14px;
        span {
          display: inline-block;
          color: grey;
          line-height: 25px;
        }
      }
      .customer-item {
        display: block;
        padding: 10px 0;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        margin-left: 20px;
        color: black;
      }
    }
  }
</style>
