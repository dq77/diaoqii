<template>
  <router-view/>
</template>

<style lang='scss'>
html {
  max-width: 750px;
  margin: 0 auto;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  color: #666;
  background-color: #f5f5f9;
  font-size: 0.28rem;
  min-height: 100vh;
}
#app {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}
#app > div {
  flex: 1 0 auto;
}
</style>
