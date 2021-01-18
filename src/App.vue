<template>
  <div id="app">
    <main-tab-bar />
  </div>
  <router-view />
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabbar";
export default {
  components: { MainTabBar }
};
</script>
<style lang="scss">
@import "assets/css/base.css";
</style>
