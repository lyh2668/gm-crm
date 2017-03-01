<template lang="html">
  <div class="histogram">
    <div class="histogram-list"
      v-for="(data, index) in hisData"
      :style="{width: values[index] + 'px' , backgroundColor: colors[index]}">
      <div class="histogram-item">{{data.title}}({{data.number}})</div>
      <div class="histogram-money">¥{{data.money}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const MIN_WIDTH = 160
export default {
  name: 'histogram',
  props: ['hisData'],
  data () {
    return {
      bigestData: 0,
      colors: ['#FFB90F', '#FF82AB', '#EE7AE9', '#836FFF', '#66CD00']
    }
  },
  methods: {
    getBigestData () {
      for (var i = 0; i < this.hisData.length; ++i) {
        if (this.bigestData < this.hisData[i].money) {
          this.bigestData = this.hisData[i].money
        }
      }
    }
  },
  created () {
    console.log(this.hisData)
    this.getBigestData()
  },
  computed: {
    values: function () {
      let arr = []
      for (let index = 0; index < this.hisData.length; ++index) {
        if (this.bigestData === 0) {
          arr.push(MIN_WIDTH)
        } else {
          arr.push((window.screen.width - (MIN_WIDTH + 40)) *
            (this.hisData[index].money / this.bigestData) + MIN_WIDTH)
        }
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.histogram {
  border-left: 1px solid #ddd;
  // background-color: #f6f6f6;
  margin: 20px 10px;
  padding: 15px 0;
  font-size: 14px;
  .histogram-list {
    background-color: #f00;
    margin-bottom: 10px;
    padding: 20px 10px;
    border-radius: 0 30px 30px 0;
    display: flex;
    &:last-of-type {
      margin-bottom: 0;
    }
    .histogram-item {
      color: #fff;
      flex: 1;
    }
    .histogram-money {
    }
  }
}
</style>
