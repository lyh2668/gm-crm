<template>
  <div class="sign-out-detail">
    <gm-header class="business-header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">拜访签退</div>
      <gm-button @click="complete" slot="right">完成</gm-button>
    </gm-header>
    <div class="list-wrapper">
      <div class='lasting'>拜访了{{ time }}</div>
      <textarea class="input" ref="textarea" placeholder="输入拜访总结"></textarea>
      <div class='button-wrapper'>
        <div class='delete' @click="deleteVisit">删除拜访</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import { formatSeconds } from 'common/js/timeUtils'
  export default {
    components: {
      gmHeader,
      gmButton
    },
    data () {
      return {
        time: ''
      }
    },
    created () {
      // var arr = JSON.parse(window.localStorage.getItem('myvisiting'))
      var arr = this.$store.state.visit.visitList
      console.log('arr: ', arr)
      arr.forEach((visiting) => {
        // 时间类型都没有转换
        if (visiting.id === parseInt(this.$route.query.id)) {
          this.time = formatSeconds((Date.parse(new Date()) - visiting.time) / 1000)
        }
      })
      for (var i = 0; i < arr.length; ++i) {
        if (arr[i].id === parseInt(this.$route.query.id)) {
          arr[i].duration = (Date.parse(new Date()) - arr[i].time) / 1000
        }
      }
      console.log('arr: ', arr)
      // window.localStorage.setItem('myvisiting', JSON.stringify(arr))
      this.$store.state.visit.visitList = arr
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      complete () {
        // var arr = JSON.parse(window.localStorage.getItem('myvisiting'))
        var arr = this.$store.state.visit.visitList
        arr.forEach((visiting) => {
          if (visiting.id === parseInt(this.$route.query.id)) {
            visiting.text = this.$refs.textarea.value
            visiting.type = 0
          }
        })
        // window.localStorage.setItem('myvisiting', JSON.stringify(arr))
        this.$store.state.visit.visitList = arr
        this.$vux.loading.show({
          text: 'signing'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.$router.go(-1)
        }, 900)
      },
      change (text) {
        var arr = JSON.parse(window.localStorage.getItem('myvisiting'))
        arr.forEach((visiting) => {
          if (visiting.id === this.$route.query.id) {
            visiting.text = text
            visiting.type = 0
          }
        })
        window.localStorage.setItem('myvisiting', JSON.stringify(arr))
      },
      deleteVisit () {
        if (confirm('确定删除么?')) {
          // var arr = JSON.parse(window.localStorage.getItem('myvisiting'))
          var arr = this.$store.state.visit.visitList
          for (var i = 0; i < arr.length; ++i) {
            if (arr[i].id === parseInt(this.$route.query.id)) {
              arr.splice(i, 1)
            }
          }
          // window.localStorage.setItem('myvisiting', JSON.stringify(arr))
          this.$store.state.visit.visitList = arr
          window.history.back()
        }
      }
    }
  }
</script>

<style lang="scss">
  .sign-out-detail {
    width: 100%;
    height: 100vh;
    background: #C1C1C1;
    .list-wrapper {
      .lasting {
        text-align: center;
        line-height: 16px;
        font-size: 16px;
        padding: 10px 0;
        font-size: 14px;
        color: grey;
      }
      .input {
        flex: 1;
        display: block;
        resize: none;
        width: calc(100% - 20px);
        min-height: 200px;
        border: none;
        line-height: inherit;
        font-size: 16px;
        outline: 0;
        padding: 10px;
        background: #fff;
        font-weight: 500;
      }
      .button-wrapper {
        width: 100%;
        text-align: center;
        margin-top: 20px;
        .delete {
          padding: 15px 0;
          background: #fff;
          color: rgb(255, 130, 0);
          text-align: center;
          margin: 0 auto;
        }
      }
    }
  }
</style>
