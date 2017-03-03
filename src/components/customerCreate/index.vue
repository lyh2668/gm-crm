<template>
  <div class="create">
    <gm-header class="gmHeader">
      <gm-button icon="back" slot="left" @click="back">返回</gm-button>
      <div class="title">{{ title }}</div>
      <gm-button slot="right" @click="complete">完成</gm-button>
    </gm-header>
    <!-- <scroller lock-x height="-44px" ref="scroller"> -->
    <div class="content-wrapper">
      <split text="客户信息"></split>
      <group gutter="0" v-for="customerInfo in customerInfos">
        <x-input :title="customerInfo.title" :placeholder="customerInfo.placeholder" v-model="customer[customerInfo.type]" v-if="customerInfo.label===0" :required="customerInfo.required" :class="customerInfo.required?'title':''"></x-input>
        <selector :title="customerInfo.title" :options="customerInfo.options" v-model="customer[customerInfo.type]" v-if="customerInfo.label===1" :required="customerInfo.required" :class="customerInfo.required?'title':''"></selector>
      </group>
      <div class="input-wrapper" v-for="(contact,index) in contactNum">
        <split :text="contactNums('联系人信息', index)" :flag="show" @deleted="deleted(index)"></split>
        <group gutter="0" v-for="contactInfo in contactInfos">
          <x-input class="contactInfo.class" :title="contactInfo.title" :placeholder="contactInfo.placeholder" v-model="customer.contacts[index][contactInfo.type]" v-if="contactInfo.label===0" :required="contactInfo.required"></x-input>
          <selector :title="contactInfo.title" :options="contactInfo.options" v-model="customer.contacts[index][contactInfo.type]" v-if="contactInfo.label===1" :required="contactInfo.required"></selector>
        </group>
      </div>
      <div class="addContact">
        <span class="text" @click="addContact">添加联系人+</span>
      </div>
      <split text="客户跟进人"></split>
      <div class="follow-up"></div>
    </div>
    <!-- </scroller> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import split from 'components/split'
  import { Group, Selector, XInput, Scroller } from 'vux'
  let CANCEL = 1
  let COMPLETE = 1
  let INDEX = 0
  let INPUT = 0
  let SELECTOR = 1
  export default {
    components: {
      gmHeader,
      gmButton,
      split,
      Group,
      Selector,
      XInput,
      Scroller
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scroller.reset({top: 0})
      })
    },
    computed: {
      // 是否显示删除
      show () {
        return (this.contactNum.length > 1)
      }
    },
    methods: {
      back () {
        this.$emit('back')
      },
      contactNums (text, index) {
        return this.contactNum.length > 1 ? `${text} ${++index}` : text
      },
      // 添加联系人
      addContact () {
        this.contactNum.push(INDEX)
        this.customer.contacts.push({})
      },
      // 删除联系人
      deleted (index) {
        this.contactNum.splice(index, 1)
      },
      // 完成
      complete () {
        if (!this.customer.name) {
          alert('请输入客户名称')
        } else {
          // if (!window.localStorage.getItem('mycustomers')) {
          //   window.localStorage.setItem('mycustomers', JSON.stringify([]))
          // }
          // let arr = JSON.parse(window.localStorage.getItem('mycustomers'))
          // for (let i = 0; i < arr.length; ++i) {
          //   if (arr[i].name === this.customer.name) {
          //     alert('有重名')
          //     return
          //   }
          // }
          // arr.push(this.customer)
          // window.localStorage.setItem('mycustomers', JSON.stringify(arr))
          this.$http.post('/api/customer/create', this.customer).then((res) => {
            this.$store.state.customer.customerList.push(res.data)
          })
          this.$vux.loading.show({
            text: 'Saveing'
          })
          setTimeout(() => {
            this.$vux.loading.hide()
          }, 900)
          this.$emit('complete')
        }
      }
    },
    data () {
      return {
        text: 'Processing',
        title: '新建客户',
        customer: {
          'contacts': [],
          'followUp': []
        },
        customerInfos: [
          {
            'title': '名称',
            'placeholder': '输入客户名称(必填)',
            'options': [],
            'type': 'name',
            'label': INPUT,
            'required': true
          },
          {
            'title': '地址',
            'placeholder': '输入客户地址',
            'options': [],
            'type': 'address',
            'label': INPUT,
            'required': false
          },
          {
            'title': '客户状态',
            'placeholder': '',
            'options': ['无', '新建的客户', '潜在客户', '成交客户', '长期客户', '流失客户'],
            'type': 'customerStatus',
            'label': SELECTOR,
            'required': false
          },
          {
            'title': '客户分级',
            'placeholder': '',
            'options': ['无', '小型客户', '中型客户', '大型客户'],
            'type': 'customerType',
            'label': SELECTOR,
            'required': false
          }
        ],
        contactInfos: [
          {
            'title': '姓名',
            'placeholder': '输入联系人姓名',
            'options': [],
            'type': 'name',
            'label': INPUT,
            'required': false
          },
          {
            'title': '手机',
            'placeholder': '输入联系人手机',
            'options': [],
            'type': 'tel',
            'label': INPUT,
            'required': false
          },
          {
            'title': '座机',
            'placeholder': '输入联系人座机',
            'options': [],
            'type': 'landline',
            'label': INPUT,
            'required': false
          },
          {
            'title': '职务',
            'placeholder': '输入联系人职务',
            'options': [],
            'type': 'job',
            'label': INPUT,
            'required': false
          },
          {
            'title': '邮箱',
            'placeholder': '输入联系人邮箱',
            'options': [],
            'type': 'email',
            'label': INPUT,
            'required': false
          },
          {
            'title': '性别',
            'placeholder': '',
            'options': ['男', '女'],
            'type': 'sex',
            'label': SELECTOR,
            'required': false
          },
          {
            'title': '备注',
            'placeholder': '输入联系人备注',
            'options': [],
            'type': 'remarks',
            'label': INPUT,
            'required': false
          }
        ],
        contactNum: [
          INDEX
        ],
        type: {
          'cancelType': CANCEL,
          'title': '新建客户',
          'nextType': COMPLETE
        }
      }
    },
    created () {
      // 请求
      this.customer.contacts.push({})
    }
  }
</script>

<style lang="scss">
  .create {
    background: #fff;
    .gmHeader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 20;
    }
    .content-wrapper {
      position: fixed;
      top: 44px;
      left: 0;
      width: 100%;
      height: calc(100% - 44px);
      overflow: auto;
      .title {
        .weui_label {
          color: rgb(255, 43, 0)
        }
      }
      .addContact {
        background: #f3f5f7;
        text-align: center;
        padding: 10px 0 20px 0;
        .text {
          color: blue;
          font-size: 12px;
        }
      }
      .follow-up {
        height: 80px;
        background: #fff;
        border: 1px solid rgba(7, 17, 27, 0.1);
        border-left: none;
        border-right: none;
      }
    }
  }
</style>
