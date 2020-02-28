<template>
  <div id="app">
    <tab-bar>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/02.png" alt="">
        <div>首页</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/02.png" alt="">
        <div>分类</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/02.png" alt="">
        <div>购物车</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/02.png" alt="">
        <div>我的</div>
      </div>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from './components/tabbar/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
 @import "./assets/css/base.css";

 
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
    width: 24px;
    /* height: 24px; */
  }
</style>
