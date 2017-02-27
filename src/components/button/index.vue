<template lang="html">
  <button
      :type="nativeType"
      class="gm-button"
      :class="['gm-button-' + type, 'gm-button-' + size, {
        'is-disabled': disabled,
        'is-plain': plain
      }]"
      @click="handleClick"
      :disabled="disabled">
      <!-- 根据iconPosition来判断图标的位置 -->
      <label v-if="iconPosition === 'right'" class="gm-button-text"><slot></slot></label>
      <span class="gm-button-icon" v-if="(icon || $slots.icon)">
        <slot name="icon">
          <i v-if="icon" class="gmui" :class="'icon-' + icon"></i>
        </slot>
      </span>
      <label v-if="iconPosition === 'left'" class="gm-button-text"><slot></slot></label>
    </button>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'gm-button',

  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return ['left', 'right'].indexOf(value) > -1
      }
    },
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return ['default', 'danger', 'primary'].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return ['small', 'normal', 'large'].indexOf(value) > -1
      }
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  created () {
    // console.log('to path: ', this.to)
  }
}
</script>

<style lang="scss">
// @import "../../common/scss/index";
@import "../../common/scss/var.scss";

.gm-button {
  appearance: none;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  display: block;
  font-size: 18px;
  height: 41px;
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  &::after {
    background-color: inherit;
    content: " ";
    opacity: 0;
    position: absolute 0 0 0 0;
  }

  &:not(.is-disabled):active::after {
    opacity: .4;
  }

  &.gm-button-icon {
    vertical-align: middle;
    display: inline-block;
  }

  &.is-disabled {
    opacity: .6;
  }
}

.gm-button-default {
  color: $button-default-color;
  background-color: $button-default-background-color;
  box-shadow: $button-default-box-shadow;
  &.is-plain {
    border: 1px solid $button-default-plain-color;
    background-color: transparent;
    box-size: none;
    color: $button-default-plain-color;
  }
}

.gm-button-primary {
  color: $button-primary-color;
  background-color: $button-primary-background-color;

  &.is-plain {
    border: 1px solid $button-primary-background-color;
    background-color: transparent;
    color: $button-primary-background-color;
  }
}

.gm-button-danger {
  color: $button-danger-color;
  background-color: $button-danger-background-color;

  &.is-plain {
    border: 1px solid $button-danger-background-color;
    background-color: transparent;
    color: $button-danger-background-color;
  }
}

.gm-button-large {
  display: block;
  width: 100%;
}

.gm-button-normal {
  display: inline-block;
  padding: 0 12px;
}

.gm-button-small {
  display: inline-block;;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}
</style>
