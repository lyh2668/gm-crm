<template lang="html">
  <div class="business-create">
    <gm-header class="header">
      <gm-button icon="back" @click="back" slot="left">返回</gm-button>
      <div class="title">新建商机</div>
      <gm-button @click="complete" slot="right">完成</gm-button>
    </gm-header>
    <scroller lock-x height="-44">
      <div class="content">
        <div class="title">
          <group gutter="0" v-for="item in businessSection['section1']">
            <x-input :title="item.title"
              :placeholder="item.placeholder"
              :required="item.required"
              v-model="contract[item.label]">
            </x-input>
          </group>
        </div>
        <div class="details">
          <group gutter="0" v-for="(item, index) in businessSection['section2']">
            <div @click="selectCustomerName" v-if="index === 0">
              <cell :title="item.title" :value="customerName" :is-link="true"></cell>
            </div>
            <selector :title="item.title"
              :options="item.options"
              v-model="contract[item.label]"
              :required="item.required"
              v-else>
            </selector>
          </group>
        </div>
        <div class="bottom">
          <group gutter="0" v-for="item in businessSection['section3']">
            <x-input :title="item.title"
              :placeholder="item.placeholder"
              :required="item.required"
              v-model="contract[item.label]">
            </x-input>
          </group>
        </div>
        <div class="person">
          <h2>跟进人</h2>
          <div class="person-pic">
            <div class="person-title">
              <img src="../../assets/man.jpg">
              <p>六个字的名字</p>
            </div>
            <div class="person-title" @click="selectStaffName">
              <img src="../../assets/add.png">
              <p>新增</p>
            </div>
          </div>
        </div>
      </div>
    </scroller>
    <customer-list class="customer-list"
      v-if="isSelectName"
      @clickItem="sureName"
      @returnButton="returnButton"
      :data="customerList">
    </customer-list>

    <staff-list class="staff-list"
      v-if="isSelectStaff"
      @clickItem="sureStaff"
      @returnButton="returnButton"
      :data="staffList">
    </staff-list>
  </div>
</template>

<script type="text/ecmascript-6">
import gmHeader from 'components/header'
import gmButton from 'components/button'
import { Scroller, Group, Selector, XInput, Cell } from 'vux'
import customerList from 'components/list/customer'
import staffList from 'components/list/staff'

export default {
  name: 'build',
  components: {
    gmHeader,
    gmButton,
    Scroller,
    Group,
    Selector,
    XInput,
    Cell,
    customerList,
    staffList
  },
  data () {
    return {
      isSelectName: false,
      isSelectStaff: false,
      customerName: '',
      contract: {
        title: '',
        money: '',
        profit: '',
        updataTime: '',
        remark: '',
        staff: ''
      },
      businessSection: {
        'section1': [{
          title: '商品名称',
          placeholder: '输入名称',
          required: true,
          label: 'title'
        }, {
          title: '预计销售金额',
          placeholder: '输入金额',
          required: false,
          label: 'money'
        }],
        'section2': [{
          title: '客户名称',
          required: false,
          label: 'money',
          options: []
        }, {
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
        }, {
          title: '成交时间',
          required: false,
          label: 'updataTime',
          options: [
            '2017年2月20日',
            '2017年2月21日',
            '2017年2月22日',
            '2017年2月23日'
          ]
        }],
        'section3': [{
          title: '备注',
          placeholder: '请输入备注（选填）',
          required: false,
          label: 'remark'
        }]
      },
      customerList: [{
        title: '张三'
      }, {
        title: '李四'
      }, {
        title: '王五'
      }],
      staffList: [{
        title: '员工1'
      }, {
        title: '员工2'
      }, {
        title: '员工3'
      }]
    }
  },
  getter: {

  },
  methods: {
    back () {
      this.$emit('back')
    },
    complete () {
      console.log(this.contract)
      if (!this.contract.title) {
        alert('请填写标题')
        return
      }
      // 将表单提交
      var data = this.contract
      console.log('表单：', data)
      this.$http.post('/api/business/create', data).then((res) => {
        this.$store.state.business.contract.push(res.data)
      })
      this.$vux.loading.show({
        text: 'Saveing'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        // this.$router.go(-1)
      }, 900)
      this.$emit('complete')
    },
    selectCustomerName () {
      console.log('selectCustomerName click')
      this.isSelectName = true
    },
    selectStaffName () {
      this.isSelectStaff = true
    },
    sureName (data) {
      this.isSelectName = false
      this.customerName = data
      console.log('选中的名字:', this.customerName)
    },
    sureStaff (data) {
      this.isSelectStaff = false
      this.contractStaff = data
      console.log('选中的员工:', data)
    },
    returnButton () {
      this.isSelectStaff = false
      this.isSelectName = false
    }
  }
}
</script>

<style lang="scss" scoped>
.business-create {
  overflow: auto;
  background-color: #eee;
  .content {
    .title {
      background-color: #fff;
      overflow: hidden;
      margin-top: 10px;
      form {
        border-bottom: 2px solid #eee;
        p {
          display: inline-block;
          font-size: 18px;
          margin: 15px 0;
          font-weight: 700;
          color: #666;
          margin-right: 10px;
        }
        input {
          border: 0;
          font-size: 18px;
        }
      }
      form:last-of-type {
        border: 0;
      }
    }
    .details {
      background-color: #fff;
      margin-top: 10px;
      overflow: auto;
    }
    .bottom {
      margin-top: 10px;
      background-color: #fff;
    }
    .person {
      h2 {
        font-size: 18px;
        color: #666;
        font-weight: 700;
        padding: 0 15px;
      }
      .person-pic {
        background-color: #fff;
        padding: 15px;
        overflow: auto;
        .person-title {
          width: 60px;
          float: left;
          margin-right: 15px;
          img {
            border-radius: 60%;
            width: 60px;
            height: 60px;
          }
          p {
            margin: 10px 0;
            text-align: center;
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
  .customer-list {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
  }
  .staff-list {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
  }
}
</style>
