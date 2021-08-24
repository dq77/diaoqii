<template>
  <div class="user">
    <Button type="primary">主要按钮</Button>
    <Tabbar v-model="activeTab" route>
      <Tabbar-item name='home' replace to="/" icon="home-o">首页</Tabbar-item>
      <Tabbar-item name='cate' replace to="/cate" icon="search">分类</Tabbar-item>
      <Tabbar-item name='user' replace to="/user" icon="friends-o">我的</Tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Tabbar, TabbarItem, Button } from 'vant';

export default {
  components: {
    Button, Tabbar, TabbarItem
  },
  setup() {
    const activeTab = ref('user');
    return {
      activeTab
    };
  },
}
</script>
