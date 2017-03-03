<template>
  <div class="visitdetail">
    <gm-header class="business-header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">外勤拜访详情</div>
      <router-link :to="{path:'/visit/detail/edit',query:{id:$route.query.id}}" slot="right">
        <gm-button>编辑</gm-button>
      </router-link>
    </gm-header>
    <scroller height="-48px" lock-x ref="scroller" :use-pulldown="true" :pulldown-config="pulldownConfig" @on-pulldown-loading="onpulldown" class="list-wrapper">
      <div class="sroller-wrapper">
        <split text="" :less="true"></split>
        <visititem :visitInfo="visitInfo" v-if="visitInfo!={}"></visititem>
        <split text="" :less="true"></split>
        <div class="discuss-title">评论</div>
        <div class="discuss-content">还没有人评论</div>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import split from 'components/split'
  import visititem from 'components/visititem'
  import { Scroller } from 'vux'
  export default {
    components: {
      gmHeader,
      gmButton,
      split,
      visititem,
      Scroller
    },
    created () {
      this.$http.get('/api/visit?uid=3').then((response) => {
        this.visitInfos = response.data
        if (window.localStorage.getItem('myvisiting')) {
          var arr = JSON.parse(window.localStorage.getItem('myvisiting'))
          for (var i = 0; i < arr.length; ++i) {
            if (arr[i].id === this.$route.query.id) {
              if (window.localStorage.getItem('discuss')) {
                arr[i].text = window.localStorage.getItem('discuss')
              }
            }
          }
          window.localStorage.setItem('myvisiting', JSON.stringify(arr))
          this.visitInfos = JSON.parse(window.localStorage.getItem('myvisiting')).concat(this.visitInfos)
        }
        this.visitInfos.forEach((visitInfo) => {
          if (visitInfo.id === this.$route.query.id) {
            this.visitInfo = visitInfo
          }
        })
        this.$nextTick(() => {
          this.$refs.scroller.reset({
            top: 0
          })
        })
      }, (response) => {
        console.log('未取到数据')
      })
    },
    destroyed () {
      window.localStorage.setItem('discuss', '')
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      onpulldown () {
        setTimeout(() => {
          this.$refs.scroller.donePulldown()
        }, 1000)
      }
    },
    data () {
      return {
        visitInfo: {},
        visitInfos: [],
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
  .visitdetail {
    background-color: #fff;
    .list-wrapper {
      .discuss-title {
        margin-left: 15px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(7, 17, 27, 0.2);
      }
      .discuss-content {
        color: rgba(7, 17, 27, 0.5);
        text-align: center;
        line-height: 60px;
      }
    }
  }
</style>
