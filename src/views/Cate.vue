<template>
  <div class="cate">
    <span>cate</span>
    <Tabbar v-model="activeTab" route>
      <Tabbar-item name='home' replace to="/" icon="home-o">首页</Tabbar-item>
      <Tabbar-item name='cate' replace to="/cate" icon="search">分类</Tabbar-item>
      <Tabbar-item name='user' replace to="/user" icon="friends-o">我的</Tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Tabbar, TabbarItem } from 'vant';

export default {
  components: {
    Tabbar, TabbarItem
  },
  setup() {
    const activeTab = ref('cate');
    return {
      activeTab
    };
  },
}
</script>
