<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: { NavBar },
  data() {
    return {};
  },
  created () {
    // 1.请求多个数据
    getHomeMultidata().then()
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
