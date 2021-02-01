<template>
  <div id="home">
    <NavBar class="home_navbar"><div slot="center">首页</div></NavBar>
    <HomeSwipe :lunboList="lunboList" />
    <HomeGrid />
  </div>
</template>

<script>
import { getCarousel } from "network/home";

import NavBar from "components/common/navbar/NavBar";
import HomeSwipe from "./childCps/HomeSwipe";
import HomeGrid from "./childCps/HomeGrid";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwipe,
    HomeGrid,
  },
  data() {
    return {
      lunboList: [],
    };
  },
  created() {
    this._getCarousel();
  },
  methods: {
    _getCarousel() {
      getCarousel().then((res) => {
        this.lunboList = res.data.message;
      });
    },
  },
};
</script>

<style scoped>
#home {
  background-color: #fff;
}
.home_navbar {
  background-color: rgb(49, 168, 249);
  color: #fff;
}
</style>