<template>
  <div class="visit">
    <gm-header class="business-header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">外勤拜访</div>
      <router-link to="/visit/create" slot="right">
        <gm-button icon="add"></gm-button>
      </router-link>
    </gm-header>
    <scroller lock-x height="-48px" ref="scroller" :use-pulldown="true" :pulldown-config="pulldownConfig" @on-pulldown-loading="onpulldown" class="list-wrapper">
      <div class="scroller-wrapper">
        <div v-for="visitInfo in visitInfos">
          <div v-if="visitInfo.type===0" class="visit-items">
            <split text="" :less="true"></split>
            <router-link :to="{path:'/visit/detail',query:{id:visitInfo.id}}">
              <visititem :visitInfo="visitInfo"></visititem>
            </router-link>
          </div>
          <div class="visitings" v-if="visitInfo.type===1">
            <visiting :visitInfo="visitInfo"></visiting>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import split from 'components/split'
  import visititem from 'components/visititem'
  import visiting from 'components/visiting'
  import { Scroller } from 'vux'
  export default {
    components: {
      gmHeader,
      gmButton,
      split,
      visititem,
      Scroller,
      visiting
    },
    created () {
      this.$http.get('/api/visit?uid=3').then((response) => {
        this.visitInfos = response.data
        if (this.$store.state.visit.visitList.length !== 0) {
          this.visitInfos = this.$store.state.visit.visitList.concat(this.visitInfos)
        }
        console.log('数据：', this.visitInfos)
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
      // path (id) {
      //   return '/visit/detail/' + id
      // },
      onpulldown () {
        this.$http.get('/api/visit?uid=3').then((response) => {
          this.visitInfos = response.data
          if (this.$store.state.visit.visitList.length !== 0) {
            this.visitInfos = this.$store.state.visit.visitList.concat(this.visitInfos)
          }
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.scroller.donePulldown()
            }, 1000)
          })
        }, (response) => {
          console.log('未取到数据')
        })
      }
    },
    data () {
      return {
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
  .visit {
    background-color: #fff;
    a {
      color: black;
    }
  }
</style>
