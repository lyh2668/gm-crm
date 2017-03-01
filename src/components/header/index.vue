<template lang="html">
  <header
    class="gm-header"
    :class="{ 'is-fixed': fixed }">
    <div class="gm-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="gm-header-title"><span v-text="title"></span><slot></slot></h1>
    <div class="gm-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'gm-header',
  props: {
    fixed: Boolean,
    title: String
  }
}
</script>

<style lang="scss">
@import '../../common/scss/var.scss';
.gm-header {
  align-items: center;
  background-color: $color-blue;
  box-sizing: border-box;
  color: $color-white;
  display: flex;
  // justify-content: space-between;
  font-size: 14px;
  height: $header-height;
  line-height: 1;
  // padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;

  // .gm-button {
  //   background-color: transparent;
  //   border: 0;
  //   box-shadow: none;
  //   color: inherit;
  //   display: inline-block;
  //   padding: 0;
  //   margin: 0 10px;
  //   font-size: inherit;
  //   &::after {
  //     content: none;
  //   }
  //   &:active {
  //     opacity: .6;
  //   }
  // }

  .gm-header-button {
    flex: .5;

    & > a {
      color: inherit;
    }

    &.is-left {
      text-align: left;
    }

    &.is-right {
      text-align: right;
    }
    // .gm-button
    .gm-button {
      background-color: transparent;
      border: 0;
      box-shadow: none;
      color: inherit;
      display: inline-block;
      padding: 0;
      margin: 0 10px;
      font-size: inherit;
      &::after {
        content: none;
      }
      &:active {
        opacity: .6;
      }
      a {
        color: inherit;
      }
    }
  }

  &.gm-header-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    font-size: 18px;
    font-weight: normal;
  }

  &.gm-header-fixed {
    position: fixed 0 0 * 0;
    z-index: $z-index-normal;
  }
}
</style>
