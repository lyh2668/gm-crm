<template lang="html">
  <div class="record">
    <gm-header class="header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">跟进记录详情</div>
      <gm-button icon="more" @click="complete" slot="right"></gm-button>
    </gm-header>
    <scroller lock-x height="-88" ref="scroller">
      <div class="record-content">
        <div class="record-head">
          <div class="record-head-title clearfix">
            <img src="../../../assets/man.jpg">
            <div class="record-head-title-person">
              <p>员工1号</p>
              <p>2017年2月20日</p>
            </div>
          </div>
          <div class="content">
            <p>一段备注</p>
          </div>
        </div>
        <div class="record-middle">
          <h2>看过 1</h2>
          <div class="record-middle-pic">
            <img src="../../../assets/man.jpg">
          </div>
        </div>
        <div class="record-comment">
          <h2>评论 1</h2>
          <div class="record-comment-list clearfix">
            <img src="../../../assets/man.jpg">
            <div class="record-comment-list-person">
              <p>员工1号</p>
              <p>2017年2月20日</p>
            </div>
          </div>
          <div class="content">
            <p>一段评论</p>
          </div>
        </div>
      </div>
    </scroller>
    <div class="record-bottom">
      <p>表情</p>
      <input type="text" name="" placeholder="添加评论">
      <p>发送</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Scroller } from 'vux'
import gmHeader from 'components/header'
import gmButton from 'components/button'

export default {
  name: 'record',
  components: {
    Scroller,
    gmHeader,
    gmButton
  },
  data () {
    return {

    }
  },
  methods: {
    complete () {

    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.record {
  background-color: #ddd;
  .record-content {
    .record-head {
      padding: 15px;
      margin-top: 10px;
      background-color: #fff;
      .record-head-title {
        display: flex;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          // float: left;
        }
        .record-head-title-person {
          flex: 1;
          p {
            margin: 2px 0 5px 15px;
            color: #999;
          }
        }
      }
      .content {
        padding-top: 10px;
      }
    }
    .record-middle {
      margin-top: 10px;
      background-color: #fff;
      padding: 0 15px 20px;
      .record-middle-pic {
        padding-top: 10px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      h2 {
        color: #999;
        border-bottom: 1px solid #eee;
      }
    }
    .record-comment {
      margin-top: 10px;
      background-color: #fff;
      padding: 0 15px 20px;
      .content {
        padding-top:15px;
      }
      h2 {
        color: #999;
        border-bottom: 1px solid #eee;
      }
      .record-comment-list {
        display: flex;
        padding-top: 10px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .record-comment-list-person {
          flex: 1;
          p {
            margin: 2px 0 5px 15px;
            color: #999;
          }
        }
      }
    }
  }
  .record-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    border-top: 1px solid #bbb;
    background-color: #eee;
    display: flex;
    p {
      width: 50px;
      text-align: center;
      color: #999;
    }
    input {
      flex: 1;
      height: 34px;
      margin-top: 4px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 0 10px;
      outline: none;
    }
  }
}
</style>
