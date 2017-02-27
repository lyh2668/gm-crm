<template lang="html">
  <div class="list-staff">

    <div class="staff-input">
      <p @click="returnButton">取消</p>
      <input type="text" name="" placeholder="按名字查找">
      <p>确定</p>
    </div>

    <div class="list">
      <div class="item" v-for="item in data">
        <p @click="clickItem(item.title)">{{ item.title }}</p>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'customerList',
  props: {
    data: Array
  },
  methods: {
    clickItem (data) {
      // 偷懒就做一个关闭的操作
      // 算了，传个数据在前面打印吧
      this.$emit('clickItem', data)
    },
    returnButton () {
      this.$emit('returnButton')
    }
  }
}
</script>

<style lang="scss" scoped>
.list-staff {
  .list {
    padding: 10px 10px;
    .item {
      line-height: 30px;
      border-bottom: 1px solid #eee;
    }
  }
  .staff-input {
    background-color: #26a2ff;
    display: flex;
    height: 44px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    input {
      flex: 1;
      height: 28px;
      line-height: 44px;
      margin: auto;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 0 10px;
    }
    p {
      text-align: center;
      padding: 5px;
      margin: 7px;
      line-height: 20px;
      border-radius: 5px;
      color: #fff;
    }
  }
}

</style>
