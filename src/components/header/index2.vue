<template lang="html">
  <div class="vue-header-wrapper">
    <div class="left">
      <div class="back"
        @click.preventDefault
        v-if="leftOptions.showBack"
        :transition="transition"
        @click="onClickBack"><span class="leftText">{{ leftOptions.backText }}</span></div>
      <slot name="left"></slot>
    </div>
    <h1 class="title"><span v-show="title" :transition="transition">{{ title }}</span><slot></slot></h1>
    <div class="right">
      <div class="text"
        @click.preventDefault
        @click="$emit('on-click-right')"
        v-if="rightOptions.type === 'text'">
        <span class="rightText">{{ rightOptions.showText }}</span>
      </div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: String,
    transition: String,
    leftOptions: {
      type: Object,
      default () {
        return {
          showBack: true,
          backText: 'Back',
          preventGoBack: false
        }
      }
    },
    rightOptions: {
      type: Object,
      default () {
        return {
          // showType: 'text',
          showText: 'Right'
        }
      }
    }
  },
  methods: {
    onClickBack () {
      if (this.leftOptions.preventGoBack) {
        this.$emit('on-click-left')
      } else {
        window.history.back()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .vue-header-wrapper {
    display: flex;
    justify-content: space-around;
    height: 40px;
    width: 100%;
    line-height: 40px;
    padding: 2px 0;
    border-bottom: 1px solid rgba(7, 17, 27, 0.2);
    background-color: #f3f5f7;
    .title {
      flex: 1;
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      width: 100%;
      margin: 0;
      color: rgba(7, 17, 27, 0.8);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        display: inline-block;
      }
    }
    .left {
      width: 60px;
      margin-left: 15px;
      color: red;
      a {
        color: red;
        &:active {
          opacity: .5;
        }
      }
      button {
        color: red;
        &:active {
          opacity: .5;
        }
      }
    }
    .right {
      width: 60px;
      text-align: right;
      margin-right: 15px;
      color: red;
      a {
        color: red;
        &:active {
          opacity: .5;
        }
      }
      button {
        color: red;
        &:active {
          opacity: .5;
        }
      }
    }
  }
  .vue-header-wrapper-fade-in-right-enter {
    animation: fadeinR .5s;
  }
  .vue-header-wrapper-fade-in-left-enter {
    animation: fadeinL .5s;
  }
  @keyframes fadeinR {
    0%{opacity:0;transform:translateX(80px);}
    100%{opacity:1;transform:translateX(0);}
  }
  @keyframes fadeinL {
    0%{opacity:0;transform:translateX(-80px);}
    100%{opacity:1;transform:translateX(0);}
  }
</style>
