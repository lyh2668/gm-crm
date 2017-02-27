<template>
  <div class='visit-create'>
    <!-- <div class='titlebar-wrapper'>
      <titlebar :type='type'></titlebar>
    </div> -->
    <gm-header>
      <gm-button icon="back" slot="left" @click="back">返回</gm-button>
      <div class="title">拜访签到</div>
    </gm-header>
    <div class='content-wrapper'>
      <div class='address'>定位中...</div>
      <router-link to='/visit/create/choose'>
        <group gutter='0'>
          <cell title='拜访客户' :value='name' is-link></cell>
        </group>
      </router-link>
      <div class='button-wrapper'>
        <div class='sign' @click='sign'>到达拜访位置，签到</div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import { Group, Cell } from 'vux'
  export default {
    components: {
      gmHeader,
      gmButton,
      Group,
      Cell
    },
    computed: {
      name () {
        if (window.localStorage.getItem('visitName')) {
          return window.localStorage.getItem('visitName')
        } else {
          return ''
        }
      }
    },
    data () {
      return {
        // type: {
        //   'cancelType': CANCEL,
        //   'title': '拜访签到',
        //   'nextType': NONE
        // },
        visiting: {
          'id': '',
          'avatar': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2870899162,3233621740&fm=23&gp=0.jpg',
          'name': '金刚葫芦娃',
          'time': '',
          'address': '这里',
          'text': '',
          'show': true,
          'office': '',
          'duration': 0,
          'type': 1
        }
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      sign () {
        if (!window.localStorage.getItem('myvisiting')) {
          window.localStorage.setItem('myvisiting', JSON.stringify([]))
        }
        if (!window.localStorage.getItem('id')) {
          window.localStorage.setItem('id', JSON.stringify(8))
        }
        this.visiting['id'] = window.localStorage.getItem('id')
        var id = window.localStorage.getItem('id')
        id++
        window.localStorage.setItem('id', JSON.stringify(id))
        this.visiting['address'] = '定位中...'
        this.visiting['office'] = window.localStorage.getItem('visitName')
        this.visiting['time'] = Date.parse(new Date())
        let arr = JSON.parse(window.localStorage.getItem('myvisiting'))
        arr.unshift(this.visiting)
        window.localStorage.setItem('myvisiting', JSON.stringify(arr))
        window.history.back()
      }
    }
  }
</script>

<style lang="scss">
  .visit-create {
    position: relative;
    width: 100%;
    height: 100vh;
    background: rgb(239, 239, 244);
    .titlebar-wrapper {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 20;
    }
    .content-wrapper {
      position: absolute;
      width: 100%;
      top: 50px;
      left: 0;
      overflow: auto;
      .address {
        text-align: center;
        line-height: 16px;
        font-size: 16px;
        padding: 10px 0;
      }
      .weui_cell_ft.with_arrow:after {
        top: calc(50% - 2px);
      }
      .button-wrapper {
        width: 100%;
        text-align: center;
        margin-top: 20px;
        .sign {
          width: 80%;
          padding: 15px 0;
          border: none;
          border-radius: 1px;
          background: rgb(255, 130, 0);
          color: #fff;
          text-align: center;
          margin: 0 auto;
        }
      }
    }
  }
</style>
