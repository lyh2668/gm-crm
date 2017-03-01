<template lang="html">
  <div class="analysis">

    <gm-header class="business-header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">商机统计</div>
    </gm-header>

    <gm-screen-bar class="screen-bar">
      <gm-button class="drop">2017年</gm-button>
      <gm-button class="drop">全年</gm-button>
    </gm-screen-bar>
    <!-- <div class="analysis-check">
      <p>2017年</p>
      <p>全年</p>
    </div> -->

    <histogram :hisData="hisData"></histogram>

  </div>
</template>

<script type="text/ecmascript-6">
import gmHeader from 'components/header'
import gmButton from 'components/button'
import gmScreenBar from 'components/screenBar'
import histogram from 'components/histogram'

export default {
  name: 'analysis',
  data () {
    return {
      hisData: [{
        stage: 0,
        money: 1000,
        title: '初步沟通',
        number: 23
      }, {
        stage: 1,
        money: 300000,
        title: '方案报价',
        number: 14
      }, {
        stage: 2,
        money: 500000,
        title: '谈判协商',
        number: 6
      }, {
        stage: 3,
        money: 700000,
        title: '赢单',
        number: 47
      }, {
        stage: 4,
        money: 0,
        title: '输单',
        number: 0
      }]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  components: {
    gmHeader,
    gmButton,
    histogram,
    gmScreenBar
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/scss/mixin.scss';

.analysis {
  .screen-bar {
    .drop {
      @include triangle-down(#777);
    }
  }
  .analysis-check {
    overflow: auto;
    p {
      float: left;
      width: 50%;
      height: 30px;
      background-color: #ddd;
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>
