<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>

    <TabBar />
  </div>
</template>

<script>
import Home from "views/home/Home";
import TabBar from "components/common/tabbar/TabBar";

export default {
  name: "App",
  components: {
    Home,
    TabBar,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
#app {
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}
</style>
