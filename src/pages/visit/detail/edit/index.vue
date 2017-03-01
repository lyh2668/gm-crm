<template>
  <div class="detail-edit">
    <gm-header class="business-header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">编辑拜访总结</div>
      <gm-button @click="complete" slot="right">完成</gm-button>
    </gm-header>
    <div class="list-wrapper">
      <textarea class="input" ref="textarea" placeholder="输入拜访总结"></textarea>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  export default {
    components: {
      gmHeader,
      gmButton
    },
    data () {
      return {}
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      complete () {
        // 因为前面定义了从10开始，所以现在我们需要减去10，才是我们要的id
        this.$store.state.visit.visitList[this.$route.params.id - 10].text = this.$refs.textarea.value
        window.history.back()
      }
    }
  }
</script>

<style lang="scss">
  .detail-edit {
    width: 100%;
    height: 100vh;
    background: rgba(7, 17, 27, 0.1);
    .titlebar-wrapper {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 20;
    }
    .list-wrapper {
      position: absolute;
      width: 100%;
      top: 68px;
      left: 0;
      overflow: auto;
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
    }
  }
</style>
