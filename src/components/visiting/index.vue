<template>
  <div class="visiting">
    <div class="visiting-left">
      <div class="visiting-left-top">
        <span class="time">{{ dateFormats(visitInfo.time) }}</span><span>{{ visitInfo.address }}</span>
      </div>
      <div class="visiting-left-bottom">
        <span class="icon-office-location"></span>
        <div class="office">
          <div>{{ visitInfo.office }}</div>
          <div class="has-signed">已签到,拜访中...</div>
        </div>
      </div>
    </div>
    <router-link class="visiting-right" :to="{path:'/visit/signout',query:{id:visitInfo.id}}">
      <div class="sign-out">签退</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import { dateFormat } from '../../common/js/timeUtils'
  export default {
    props: {
      visitInfo: {
        type: Object
      }
    },
    methods: {
      dateFormats (mill) {
        return dateFormat(mill)
      }
    }
  }
</script>

<style lang="scss">
  .visiting {
    background: rgb(255, 249, 200);
    color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    display: flex;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .visiting-left {
      flex: 1;
      .visiting-left-top {
        font-size: 12px;
        margin-bottom: 10px;
        .time {
          margin-right: 5px;
        }
      }
      .visiting-left-bottom {
        font-size: 0;
        .icon-office-location {
          color: rgb(255, 43, 0);
          margin-right: 5px;
          font-size: 18px;
          vertical-align: top;
        }
        .office {
          vertical-align: top;
          font-size: 18px;
          display: inline-block;
          line-height: 26px;
          .has-signed {
            font-size: 14px;
          }
        }
      }
    }
    .visiting-right {
      flex: 0 0 80px;
      text-align: center;
      margin: auto 0;
      .sign-out {
        color: rgb(255, 43, 0);
        padding: 10px 0;
        border-radius: 5px;
        border: 1px solid rgb(255, 43, 0);
      }
    }
  }
</style>
