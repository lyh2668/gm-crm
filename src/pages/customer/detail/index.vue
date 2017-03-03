<template>
  <div class="customerdetail">
    <!-- <div class="titlebar-wrapper">
      <titlebar :type="type" @complete="complete"></titlebar>
    </div> -->
    <gm-header>
      <gm-button icon="back" slot="left" @click="back">返回</gm-button>
      <div class="title">客户详情</div>
    </gm-header>
    <Scroller lock-x height="-48px">
      <div class="content-wrapper">
        <split text="客户信息"></split>
        <group gutter="0" v-for="customerInfo in customerInfos">
          <x-input :title="customerInfo.title" v-model="model" v-if="customerInfo.label===0" :disabled="true"></x-input>
          <selector value="这里" :title="customerInfo.title" :options="['这里','哪里']" v-model="model" v-if="customerInfo.label===1"></selector>
        </group>
        <div class="input-wrapper">
          <split text="联系人信息"></split>
          <group gutter="0" v-for="contactInfo in contactInfos">
            <x-input :title="contactInfo.title" v-model="model" v-if="contactInfo.label===0" :disabled="true"></x-input>
            <selector :title="contactInfo.title" :options="contactInfo.options" v-model="model" v-if="contactInfo.label===1"></selector>
          </group>
        </div>
        <split text="客户跟进人"></split>
        <div class="follow-up"></div>
        <split text=""></split>
      </div>
    </Scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import gmScreenBar from 'components/screenBar'
  import gmHeader from 'components/header'
  import gmButton from 'components/button'
  import split from 'components/split'
  import { Group, Selector, XInput, Scroller } from 'vux'
  // let CANCEL = 0
  // let SHARE = 3
  let INPUT = 0
  let SELECTOR = 1
  export default {
    components: {
      gmScreenBar,
      gmHeader,
      gmButton,
      split,
      Group,
      Selector,
      XInput,
      Scroller
    },
    methods: {
      complete () {
        alert('分享')
      },
      back () {
        this.$router.go(-1)
      }
    },
    computed: {
      model () {
        return this.$route.query.name
      }
    },
    data () {
      return {
        // type: {
        //   'cancelType': CANCEL,
        //   'title': '详情',
        //   'nextType': SHARE
        // },
        customerInfos: [
          {
            'title': '名称',
            'options': [],
            'label': INPUT
          },
          {
            'title': '地址',
            'options': [],
            'label': SELECTOR
          },
          {
            'title': '创建时间',
            'options': [],
            'label': INPUT
          }
        ],
        contactInfos: [
          {
            'title': '姓名',
            'options': [],
            'label': INPUT
          },
          {
            'title': '手机',
            'options': [],
            'label': INPUT
          },
          {
            'title': '座机',
            'options': [],
            'label': INPUT
          },
          {
            'title': '职务',
            'options': [],
            'label': INPUT
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .follow-up {
    height: 80px;
    background: #fff;
    border: 1px solid rgba(7, 17, 27, 0.1);
    border-left: none;
    border-right: none;
  }
</style>
