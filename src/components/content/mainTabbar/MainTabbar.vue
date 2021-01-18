<template>
  <tabbar>
    <tabbar-item
      v-for="item in allData"
      :key="item.id"
      :path="item.path"
      :activeColor="item.activeColor"
    >
      <template v-slot:item-icon>
        <img :src="item.url" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img :src="item.activeurl" alt="" />
      </template>
      <template v-slot:item-text>
        <span>{{ item.text }}</span>
      </template>
    </tabbar-item>
  </tabbar>
</template>
<style lang="scss" scoped></style>
<script>
import Tabbar from "@/components/common/tabbar/Tabbar";
import TabbarItem from "@/components/common/tabbar/TabbarItem";
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      allData: [
        {
          id: 1,
          url: require("assets/img/tabbar/home.svg"),
          activeurl: require("assets/img/tabbar/home_active.svg"),
          text: "首页",
          path: "/home",
          activeColor: "pink"
        },
        {
          id: 2,
          url: require("assets/img/tabbar/profile.svg"),
          activeurl: require("assets/img/tabbar/profile_active.svg"),
          text: "分类",
          path: "/profile",
          activeColor: "green"
        },
        {
          id: 3,
          url: require("assets/img/tabbar/category.svg"),
          activeurl: require("assets/img/tabbar/category_active.svg"),
          text: "购物车",
          path: "/category",
          activeColor: "blue"
        },
        {
          id: 4,
          url: require("assets/img/tabbar/shopcart.svg"),
          activeurl: require("assets/img/tabbar/shopcart_active.svg"),
          text: "我的",
          path: "/cart",
          activeColor: "purple"
        }
      ]
    };
  }
};
</script>
