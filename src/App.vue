<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~material-design-icons/iconfont/material-icons.css';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  background: linear-gradient(#e3e8ec, #e3e8ec);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% 300px;
  padding-bottom: 30px;
}
</style>
