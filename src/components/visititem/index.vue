<template>
  <div class="visit-item">
    <div class="followup-info">
      <div class="info-left">
        <img :src="visitInfo.avatar" width="36" height="36">
      </div>
      <div class="info-right">
        <p class="name">{{ visitInfo.name }}</p>
        <span class="time">{{ dateFormats(visitInfo.time) }}</span>
        <span class="address">{{ visitInfo.address }}</span>
      </div>
    </div>
    <div class="visit-info">{{ visitInfo.text }}</div>
    <div class="visit-office" v-if="visitInfo.show">
      <span class="icon-office-location"></span>
      <router-link :to="path(visitInfo.office)" class="office">{{ visitInfo.office }}</router-link>
    </div>
    <div class="visit-duration">拜访了{{ formatSecond(visitInfo.duration) }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { formatSeconds, dateFormat } from '../../common/js/timeUtils'
  export default {
    props: {
      visitInfo: {
        type: Object
      }
    },
    methods: {
      formatSecond (value) {
        return formatSeconds(value)
      },
      dateFormats (mill) {
        return dateFormat(mill)
      },
      path (name) {
        return '/customer/info/' + name
      }
    }
  }
</script>

<style lang="scss">
  .visit-item {
    padding: 10px;
    border: 1px solid rgba(7, 17, 27, 0.1);
    border-left: none;
    border-right: none;
    position: relative;
    .followup-info {
      font-size: 0;
      .info-left {
        display: inline-block;
        img {
          border-radius: 50px;
        }
      }
      .info-right {
        display: inline-block;
        margin-left: 10px;
        .name,.time,.address {
          vertical-align: bottom;
          font-size: 12px;
          line-height: 18px;
        }
        .time,.address {
          color: rgb(7, 27, 180);
        }
        .address {
          margin-left: 5px;
        }
      }
    }
    .visit-info {
      font-size: 18px;
      line-height: 18px;
      padding: 10px 0;
    }
    .visit-office {
      font-size: 0;
      .icon-office-location,.office {
        font-size: 14px;
        line-height: 14px;
      }
      .office {
        margin-left: 5px;
        color: rgb(7, 27, 180);
        font-weight: 500;
      }
    }
    .visit-duration {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 12px;
      color: grey;
    }
  }
</style>
