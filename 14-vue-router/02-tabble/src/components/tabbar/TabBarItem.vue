<template>
  <div class="tab-bar-item">
    <!-- 所有的item都展示同一个图片,同一个文字 -->
    <slot name="item-icon"></slot>
    <slot name="item-icon-active"></slot>
    <slot name="item-text"></slot>
    <!-- <img src="../../assets/img/tabbar/02.png" alt />
    <div>首页</div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  /* height: 24px; */
  margin-top: 3px;
  /* vertical-align: middle; */
}
</style>
