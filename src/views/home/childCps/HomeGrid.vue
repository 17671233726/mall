<template>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="~assets/img/home/menu01.png" />
        <div class="mui-media-body">新闻资讯</div></a
      >
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="~assets/img/home/menu02.png" />
        <div class="mui-media-body">图片分享</div></a
      >
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="~assets/img/home/menu03.png" />
        <div class="mui-media-body">商品购买</div></a
      >
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="~assets/img/home/menu04.png" />
        <div class="mui-media-body">留言反馈</div></a
      >
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="~assets/img/home/menu05.png" />
        <div class="mui-media-body">视频专区</div></a
      >
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="~assets/img/home/menu06.png" />
        <div class="mui-media-body">联系我们</div></a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeGrid",
};
</script>

<style scoped>
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
img {
  width: 60px;
  height: 60px;
}
</style>