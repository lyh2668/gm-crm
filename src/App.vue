<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view animated" ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.substring(0, to.path.length - 2).split('/').length
      const fromDepth = from.path.substring(0, from.path.length - 2).split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
    }
  }
}
</script>

<style lang="scss">
  #app {
    position: relative;
    .router-view {
      // background: #fff;
      box-shadow: -1px 0 9px -5px black;
      height: 100vh;
    }
    .slide-leave-active {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      transition: all .4s cubic-bezier(.56,.2,1,0);
      transform: translate3D(-5px, 0, 0);
    }
    .slide-enter-active {
      transition: all .4s cubic-bezier(0.25,0.1,0.25,1);
    }
    .slide-enter {
      transform: translate3D(100%, 0, 0);
    }
    .slide_back-leave-active {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 20;
      transition: all .4s cubic-bezier(0.25,0.1,0.25,1);
      transform: translate3D(100%, 0, 0);
    }
    .slide_back-enter-active {
      transition: all .4s cubic-bezier(0.25,0.1,0.25,1);
    }
    .slide_back-enter {
      opacity: 0;
      transform: translate3D(0, 0, 0);
    }
  }
  // .animated {
  //   -webkit-animation-duration: .5s;
  //   animation-duration: .5s;
  // }
  // .slide_back-enter-active,
  // .slide_back-leave-active,
  // .slide-enter-active,
  // .slide-leave-active {
  //   // will-change: transform;
  //   height: 100%;
  //   position: absolute;
  //   left: 0;
  //   width: 100%;
  // }
  // .slide_back-enter-active {
  //   animation-name: popInLeft;
  //   -webkit-animation-name: popInLeft;
  // }
  // .slide_back-leave-active {
  //   animation-name: popOutRight;
  //   -webkit-animation-name: popOutRight;
  // }
  // .slide-enter-active {
  //   animation-name: popInRight;
  //   -webkit-animation-name: popInRight;
  // }
  // .slide-leave-active {
  //   animation-name: popOutLeft;
  //   -webkit-animation-name: popOutLeft;
  // }
  // @keyframes popInLeft {
  //   from {
  //     // opacity: 1;
  //     transform: translate3d(-100%, 0, 0);
  //   }
  //   to {
  //     // opacity: 1;
  //     transform: translate3d(0, 0, 0);
  //   }
  // }
  // @keyframes popOutLeft {
  //   from {
  //     // opacity: 1;
  //   }
  //   to {
  //     // opacity: 1;
  //     transform: translate3d(-100%, 0, 0);
  //   }
  // }
  // @keyframes popInRight {
  //   from {
  //     // opacity: 1;
  //     transform: translate3d(100%, 0, 0);
  //   }
  //   to {
  //     // opacity: 1;
  //     transform: translate3d(0, 0, 0);
  //   }
  // }
  // @keyframes popOutRight {
  //   from {
  //     // opacity: 1;
  //   }
  //   to {
  //     // opacity: 1;
  //     transform: translate3d(100%, 0, 0);
  //   }
  // }
  
</style>
