<template>
  <div class="home">
    <Swipe class="top-swipe" :autoplay="3000" indicator-color="white">
      <Swipe-item>1</Swipe-item>
      <Swipe-item @click='toJianli("Xsy")'>2</Swipe-item>
      <Swipe-item @click='toJianli("Dq")'>3</Swipe-item>
      <Swipe-item>4</Swipe-item>
    </Swipe>
    <span>12</span>
    <Tabbar v-model="activeTab" route>
      <Tabbar-item name='home' replace to="/" icon="home-o">首页</Tabbar-item>
      <Tabbar-item name='cate' replace to="/cate" icon="search">分类</Tabbar-item>
      <Tabbar-item name='user' replace to="/user" icon="friends-o">我的</Tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { Tabbar, TabbarItem, Swipe, SwipeItem } from 'vant';

export default {
  components: {
    Tabbar, TabbarItem, Swipe, SwipeItem
  },
  setup() {
    const router = useRouter()
    const activeTab = ref('home');
    const toJianli = (name) => {
      router.push({name: `jianli${name}`})
    }
    return {
      activeTab,
      toJianli
    };
  },
}
</script>

<style lang='scss'>
.home{
  background-color: #fff;
  .top-swipe {
    color: #fff;
    font-size: 20px;
    line-height: 170px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
