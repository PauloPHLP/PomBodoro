<template>
  <div id="app">
     <router-view />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    height: 100vh;
    width: 100vw;
    background-color: #1E1B2E;
    color: #ffffff;
  }
</style>
