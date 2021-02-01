<template>
  <mt-swipe>
    <mt-swipe-item v-for="item in lunboList" :key="item.id">
      <a :href="item.url">
        <img :src="item.img" />
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "HomeSwipe",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  props: {
    lunboList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
}
/* .mint-swipe-items-wrap {
  height: 200px;
} */
</style>