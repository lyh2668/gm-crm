<template lang="html">
  <div class="business">
    <gm-header class="business-header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">商机</div>
      <gm-button icon="add" slot="right" @click="show"></gm-button>
    </gm-header>
    <div class="business-content">
      <router-link to="" class="business-check">
        <span>我可以查看的商机</span>
        <i class="icon-arrow-right"></i>
      </router-link>
      <gm-screen-bar class="business-subtitle">
        <gm-button class="drop triangle-down">成交时间</gm-button>
        <gm-button class="drop triangle-down">销售阶段</gm-button>
        <gm-button class="drop triangle-down">最近创建</gm-button>
      </gm-screen-bar>
      <scroller lock-x height="-134" ref="scroller">
        <div class="business-list">
          <router-link to="/business/detail" class="business-item border-1px" v-for="data in businessData">
            <h2>{{data.title}}</h2>
            <p class="business-company">{{data.company}}</p>
            <p class="business-price">{{data.money}}</p>
            <label class="business-profit">{{data.profit}}</label>
          </router-link>
        </div>
      </scroller>
      <router-link class="statistics" to="business/statistics">
        <label class="text">统计</label>
      </router-link>
    </div>
    <transition name="opacity">
      <business-create class="create" v-show="showCreate" @complete="notShow" @back="notShow"></business-create>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">

  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import gmScreenBar from 'components/screenBar'
  import businessCreate from 'components/businessCreate'
  import { Scroller } from 'vux'

  export default {
    name: 'business',
    components: {
      gmHeader,
      gmButton,
      gmScreenBar,
      Scroller,
      businessCreate
    },
    data () {
      return {
        showCreate: false,
        businessData: []
      }
    },
    methods: {
      notShow () {
        this.showCreate = false
      },
      show () {
        this.showCreate = true
      },
      back () {
        this.$router.go(-1)
      },
      // 通过store获取数据
      getStoreData () {
        this.$http.get('api/business?uid=3').then((res) => {
          console.log('请求到的数据：', res)
          this.businessData = res.data
          if (this.$store.state.business.contract.length !== 0) {
            this.businessData = this.businessData.concat(this.$store.state.business.contract)
          }
          this.$nextTick(() => {
            this.$refs.scroller.reset()
          })
        })
      }
    },
    created () {
      this.getStoreData()
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
.business-content {
  .create {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
  }
  .business-check {
    display: block;
    padding: 0 10px;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #eee;
    width: 100%;
    line-height: 50px;
    text-decoration: none;
    color: #666;
    .icon-arrow-right {
      position: absolute;
      right: 10px;
      line-height: 50px;
      font-size: 22px;
    }
  }
  .business-subtitle {
    .drop {
      @include triangle-down(#777);
    }
  }
  .business-list {
    .business-item {
      // border-bottom: 1px solid #eee;
      display: block;
      text-decoration: none;
      padding: 10px;
      position: relative;
      @include border-1px(#eee);
      .business-profit {
        position: absolute;
        bottom: 16px;
        right: 10px;
        color: #f00;
      }
      h2 {
        color: #000;
      }
      p {
        color: #999;
        font-size: 13px;
        margin-top: 5px;
      }
      .business-company:before {
        content: '';
        display:inline-block;
        background: url(../../assets/company.png) no-repeat;
        background-size: 100% 100%;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        vertical-align: middle;
      }
      .business-price:before {
        content: '';
        display:inline-block;
        background: url(../../assets/money.png) no-repeat;
        background-size: 100% 100%;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
  }
  .statistics {
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background-color: #0af;
    color: #fff
  }
}
</style>
