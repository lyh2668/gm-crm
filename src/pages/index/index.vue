<template lang="html">
  <div class="index">
    <gm-header>
      <div class="title">首页</div>
    </gm-header>
    <div class="list-wrapper">
      <router-link to="/customer" class="list-item">
        <i class="icon"><img src="./images/customer.png" width="24" height="24"></i>
        <div>客户</div>
      </router-link>
      <router-link to="/business" class="list-item">
        <i class="icon"><img src="./images/customer.png" width="24" height="24"></i>
        <div>商机</div>
      </router-link>
      <router-link to="/visit" class="list-item">
        <i class="icon"><img src="./images/customer.png" width="24" height="24"></i>
        <div>拜访</div>
      </router-link>
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
    return {
      title: '123',
      index: 'index'
    }
  },
  methods: {
    clickRight () {
      this.$router.push('/client')
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  .index {
    .list-wrapper {
      display: flex;
      justify-content: space-around;
      .list-item {
        display: block;
        width: 80px;
        height: 80px;
        text-align: center;
        margin: 10px;
        border: 1px solid rgba(7, 17, 27, 0.2);
        border-radius: 10px;
        i {
          color: inherit;
        }
        .icon {
          vertical-align: middle;
          display: inline-block;
          width: 24px;
          height: 24px;
          margin: 12px auto;
        }
      }
    }
  }
</style>
