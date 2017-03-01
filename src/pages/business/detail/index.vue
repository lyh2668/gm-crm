<template lang="html">
  <div class="business-detail">
    <gm-header class="header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">商机详情</div>
      <gm-button icon="more" @click="complete" slot="right"></gm-button>
    </gm-header>
    <scroller lock-x height="-44" ref="scroller" class="scroller">
      <div class="business-content">
        <div class="business-head">
          <h2>{{ businessData.title }}</h2>
          <p>{{ businessData.company }}</p>
          <div class="business-head-details">
            <p>预计成交金额：{{ businessData.money }}</p>
            <p>预计成交日期：{{ businessData.expectTime }}</p>
            <p>备注：{{ businessData.remark }}</p>
          </div>
        </div>
        <div class="business-event">
          <selector :title="salesStage.title"
            :options="salesStage.options"
            v-model="businessData[salesStage.label]"
            :required="salesStage.required">
          </selector>
          <div @click="selectStaffName">
            <cell title="跟进人" :value="staffName" :is-link="true"></cell>
          </div>
          <!-- <div to="" class="business-event-a" @click="selectStaffName">
            <label>跟进人</label>
            <label class="business-event-a-p">{{staffName}}</label>
          </div> -->
        </div>
        <div class="business-record">
          <h2>跟进记录（2）</h2>
          <router-link v-for="data in businessData.stage" to="/business/record" class="business-record-a">
            <div class="business-record-person">
              <img src="../../../assets/man.jpg">
              <div>
                <p>{{data.staff}}</p>
                <p>{{data.updataTime}}</p>
              </div>
            </div>
            <div class="business-record-thing">
              <p>{{data.text}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </scroller>
    <div class="business-add" @click="addComment">
      <p>添加跟进记录+</p>
    </div>
    <staffList class="staff-list" v-if="isSelectStaff" @clickItem="sureStaff" @returnButton="returnButton" :data="staffList">
    </staffList>
    <div class="comment" v-if="addCommentText">
      <div class="comment-title">
      <!-- 偷个懒两个点击事件放在一起 -->
        <p @click="commentSure">取消</p>
        <h2>添加跟进记录</h2>
        <p @click="commentSure">确定</p>
      </div>
      <textarea placeholder="请输入您的评论"></textarea>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import { Scroller, Group, Selector, Cell } from 'vux'
// import allTitle from '../../components/title'
import gmHeader from 'components/header'
import gmButton from 'components/button'
import staffList from 'components/list/staff'

export default {
  name: 'businessDetail',
  components: {
    Scroller,
    gmHeader,
    gmButton,
    Group,
    Selector,
    Cell,
    staffList
  },
  data () {
    return {
      scrollTop: 0,
      businessData: [],
      isSelectStaff: false,
      staffName: '',
      addCommentText: false,
      salesStage: {
        title: '销售阶段',
        required: false,
        label: 'profit',
        options: [
          '初步沟通（10%）',
          '方案报价（50%）',
          '谈判协商（80%）',
          '赢单（100%）',
          '输单（0%）',
          '无效'
        ]
      },
      staffList: [{
        title: '员工1'
      }, {
        title: '员工2'
      }, {
        title: '员工3'
      }]
    }
  },
  methods: {
    complete () {

    },
    back () {
      this.$router.go(-1)
    },
    reset () {
      let that = this
      console.log('rest this: ', this)
      this.$nextTick(function () {
        console.log('this:', that.$refs)
        that.$refs.scroller.reset()
      })
    },
    selectStaffName () {
      this.isSelectStaff = true
    },
    sureStaff (data) {
      this.isSelectStaff = false
      this.staffName = data
    },
    returnButton () {
      this.isSelectStaff = false
    },
    addComment () {
      window.sessionStorage.setItem('routerBackDisable', true)
      // window.sessionStorage.setItem('backPath', this.$route.path)
      this.addCommentText = true
    },
    commentSure () {
      window.sessionStorage.removeItem('routerBackDisable')
      this.addCommentText = false
    }
  },
  created () {
    this.businessData = this.$store.state.business.conDetail
  }
}
</script>

<style lang="scss" scoped>
.business-detail {
  background-color: #eee;
  overflow: hidden;
  .scroller {}
  .business-content {
    .business-head {
      margin-top: 10px;
      background-color: #fff;
      overflow: hidden;
      padding: 10px 15px;
      & > p {
        font-size: 17px;
        color: #09f;
        line-height: 25px;
        font-weight: 700;
        padding-bottom: 10px;
      }
      & > p:before {
        content: '';
        display:inline-block;
        background: url('../../../assets/company.png') no-repeat;
        background-size: 100% 100%;
        width: 25px;
        height: 25px;
        margin-right: 10px;
        vertical-align: middle;
      }
      .business-head-details {
        color: #999;
        & > p:not(:last-child) {
          padding-bottom: 10px;
        }
      }
    }
    .business-event {
      background-color: #fff;
      margin-top: 10px;
      & > :not(:last-child) {
        border-bottom: 1px solid #eee;
      }
      .business-event-a:after {
        content: '';
        position: absolute;
        right: 0;
        top: 20px;
        color: #999;
        border-top: 10px solid #999;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }
    }
    .business-record {
      margin-top: 10px;
      background-color: #fff;
      padding: 0 15px 20px;
      h2 {
        border-bottom: 1px solid #eee;
        margin: 0;
        padding: 10px 0 10px 10px;
        color: #999;
        line-height: 20px;
      }
      h2:before {
        content: '';
        width: 5px;
        height: 20px;
        background-color: #26a2ff;
        position: absolute;
        left: 15px;
      }
      .business-record-a {
        text-decoration: none;
        color: #999;
        .business-record-person {
          padding: 10px 0;
          img {
            width: 50px;
            height: 50px;
            float: left;
            border-radius: 50%;
            margin-right: 10px;
          }
          p {
            margin: 4px 0;
          }
        }
      }
    }
  }
  .business-add {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ddd;
    background-color: #fafafa  ;
    height: 40px;
    line-height: 40px;
    z-index: 10;
    text-align: center;
  }
  .staff-list {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: 11;
  }
  .comment {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 12;
    .comment-title {
      display: flex;
      height: 44px;
      line-height: 44px;
      color: #fff;
      background-color: #26a2ff;
      h2 {
        flex: 1;
        text-align: center;
        line-height: 44px;
      }
      p {
        text-align: center;
        width: 50px;
        color: #fff;
        font-size: 14px;
      }
    }
    textarea {
      margin: 15px;
      width: 90%;
      min-height: 400px;
      outline: 0;
    }
  }
}
</style>
