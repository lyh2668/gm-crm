<template>
  <div class="split">
    <span class="text">{{text}}</span>
    <span v-show="flag" class="delete" @click="deleted">删除</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      text: {
        type: String
      },
      flag: {
        type: Boolean
      }
    },
    methods: {
      deleted () {
        this.$emit('deleted')
      }
    }
  }
</script>

<style lang="scss">
  .split {
    position: relative;
    background: #f3f5f7;
    font-size: 12px;
    padding: 10px;
    .text {
      font-size: 16px;
      margin: auto 0;
    }
    .delete {
      position: absolute;
      right: 10px;
      color: blue;
    }
  }
</style>
