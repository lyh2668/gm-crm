<template lang="html">
  <div class="gm-screen-bar border-1px">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'gm-screen-bar'
}
</script>

<style lang="scss">
@import "../../common/scss/var";
@import "../../common/scss/mixin";

.gm-screen-bar {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: $screenbar-background-color;
  color: inherit;
  padding: 1px 0;
  @include border-1px($line-color);
  .gm-button {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit;
    width: 100%;
    border-radius: 0;
    margin: 10px 0;
    line-height: 21px;
    height: 21px;
    &:not(:last-child) {
      border-right: 1px solid $line-color;
    }
    &:active {
      opacity: .6;
    }
    a {
      color: inherit;
    }
  }
  &::after {

  }
}
</style>
