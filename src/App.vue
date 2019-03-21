<template>
  <div class="app">
    <!-- 头部 -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
    />
    <!-- 中间 -->

    <router-view></router-view>
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/shouye">标签</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        dot to="/count"
      >标签</van-tabbar-item>
      <van-tabbar-item
        icon="friends-o"
        info="5" to="/cart"
      >标签</van-tabbar-item>
      <van-tabbar-item
        icon="setting-o"
        info="20" to="/search"
      >标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
.app {
  padding-top: 45.6px;
}
</style>
