<template lang="html">
  <gm-button><router-link to="to"><slot></slot></router-link></gm-button>
</template>

<script type="text/ecmascript-6">
import gmButton from 'components/button'
export default {
  components: {
    gmButton
  },
  props: {
    to: String
  }
}
</script>

<style lang="scss">
</style>
