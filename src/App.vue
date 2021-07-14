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
  -webkit-tap-highlight-color: transparent;
}

* {
  outline: none;
}

*::-moz-focus-inner {
  border: 0;
}

*:focus {
  outline: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: #1e1b2e;
  color: #ffffff;
}
</style>
